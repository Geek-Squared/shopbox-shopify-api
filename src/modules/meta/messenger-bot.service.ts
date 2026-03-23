import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MetaSenderService } from './meta-sender.service';
import { ShopifyApiService } from '../shopify/shopify-api.service';
import { ShopifyRepository } from '../shopify/shopify.repository';
import { BotSessionService, BotContext } from '../whatsapp/bot-session.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MessengerBotService {
  private readonly logger = new Logger(MessengerBotService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly metaSender: MetaSenderService,
    private readonly shopifyApi: ShopifyApiService,
    private readonly repository: ShopifyRepository,
    private readonly session: BotSessionService,
    private readonly config: ConfigService,
  ) {}

  async handle(data: {
    senderId: string;
    merchantId: string;
    text?: string;
    postbackPayload?: string;
    referral?: string;
  }): Promise<void> {
    const { senderId, merchantId, text, postbackPayload, referral } = data;
    const sessionKey = `msg_${senderId}_${merchantId}`;
    let input = (postbackPayload ?? text ?? '').trim();
    const { state, context } = await this.session.get(sessionKey);

    const merchant = await this.repository.findById(merchantId);
    if (!merchant || !merchant.messengerToken) {
      this.logger.error(`Merchant ${merchantId} not found or Messenger not connected`);
      return;
    }

    const token = merchant.messengerToken;
    const lowerInput = input.toLowerCase();

    // Referral parsing (click-to-messenger ads)
    if (referral) {
      return this.handleReferral(senderId, merchant, token, referral);
    }

    // Dynamic Global commands from Database Triggers
    const activeTriggers = await this.prisma.commentTrigger.findMany({
      where: { merchantId: merchant.id, isActive: true },
    });
    if (['GET_STARTED', 'SHOP_NOW', 'START_OVER'].includes(input)) {
      return this.handleWelcome(senderId, merchant, token);
    }

    // Check for Global Keywords at any time
    const matchingTrigger = await this.prisma.commentTrigger.findFirst({
      where: { 
        merchantId: merchant.id, 
        isActive: true,
        keyword: { equals: input, mode: 'insensitive' }
      }
    });

    if (matchingTrigger) {
      const storeName = merchant.shop.split('.')[0];
      let dmText = matchingTrigger.templateMessage;
      if (!dmText) {
        dmText = `Hi! 👋 Thanks for your interest in {{store_name}}.\n\nReply "shopping" to browse our collection!`;
      }
      
      // Since we don't have a specific product in mind for a general chat keyword, we just replace store_name
      dmText = dmText.replace(/{{store_name}}/g, storeName || 'our store')
                     .replace(/{{commenter_name}}/g, 'there');

      await this.metaSender.sendText(senderId, dmText, token, merchant.id, 'messenger');
      // If we're generic, we can show the welcome menu below the template
      return this.handleWelcome(senderId, merchant, token, true); // Added 'skipHeader' flag
    }
    if (input === 'VIEW_CART' || lowerInput === 'cart') {
      return this.handleViewCart(senderId, merchant, token, context);
    }
    if (input === 'MY_ORDERS') {
      return this.handleMyOrders(senderId, merchant, token);
    }
    
    // Global button recovery: If they click an old menu button, always handle it even if bot was IDLE
    if (input.startsWith('CAT_')) return this.handleCategorySelection(senderId, merchant, token, input, context);
    if (input.startsWith('VIEW_') || input.startsWith('ADD_')) return this.handleProductSelection(senderId, merchant, token, input, context);
    if (input.startsWith('VAR_')) return this.handleVariantSelection(senderId, merchant, token, input, context);

    if (input === 'MY_ORDERS') {
      return this.handleMyOrders(senderId, merchant, token);
    }
    if (['cancel', 'stop'].includes(lowerInput)) {
      await this.session.reset(sessionKey);
      return this.metaSender.sendText(senderId, '❌ Order cancelled. Send *hi* to start again.', token, merchant.id, 'messenger');
    }

    // State routing
    switch (state) {
      case 'IDLE':
        return; // Let humans chat safely without bot interrupting
      case 'BROWSING_CATEGORIES':
        return this.handleCategorySelection(senderId, merchant, token, input, context);
      case 'BROWSING_PRODUCTS':
        return this.handleProductSelection(senderId, merchant, token, input, context);
      case 'SELECTING_VARIANT':
        return this.handleVariantSelection(senderId, merchant, token, input, context);
      case 'VIEWING_PRODUCT':
        return this.handleProductAction(senderId, merchant, token, input, context);
      case 'CART':
        return this.handleCartAction(senderId, merchant, token, input, context);
      case 'CHECKOUT_NAME':
        return this.handleCheckoutName(senderId, merchant, token, text ?? '', context);
      case 'CHECKOUT_ADDRESS':
        return this.handleCheckoutAddress(senderId, merchant, token, text ?? '', context);
      case 'CHECKOUT_PAYMENT':
        return this.handlePaymentSelection(senderId, merchant, token, input, context);
      default:
        return;
    }
  }

  private async handleReferral(senderId: string, merchant: any, token: string, referral: string) {
    const sessionKey = `msg_${senderId}_${merchant.id}`;
    if (referral.startsWith('product_')) {
      const productId = referral.replace('product_', '');
      const product = await this.shopifyApi.getProduct(merchant.shop, productId);
      return this.showProductDetail(senderId, merchant, token, product, { merchantId: merchant.id, shop: merchant.shop });
    }
    if (referral.startsWith('collection_')) {
      const collectionId = referral.replace('collection_', '');
      const products = await this.shopifyApi.getProductsByCollection(merchant.shop, collectionId);
      await this.metaSender.sendCarousel(senderId, products.map(p => ({
        title: p.title,
        subtitle: `$${p.price.toFixed(2)} · ${p.available ? 'Available' : 'Out of stock'}`,
        imageUrl: p.primaryImage,
        productId: p.id
      })), token, merchant.id);
      await this.session.set(sessionKey, 'BROWSING_PRODUCTS', { merchantId: merchant.id, shop: merchant.shop, products });
      return;
    }
    return this.handleWelcome(senderId, merchant, token);
  }

  private async handleWelcome(senderId: string, merchant: any, token: string, skipHeader = false) {
    const sessionKey = `msg_${senderId}_${merchant.id}`;
    if (!skipHeader) await this.metaSender.sendTypingOn(senderId, token, 'messenger');
    
    const collections = await this.shopifyApi.getCollections(merchant.shop);
    const welcomeText = `Hey! 👋 Welcome to *${merchant.shop.split('.')[0]}*.\nWhat are you looking for today?`;

    if (collections.length === 0) {
      const products = await this.shopifyApi.getProducts(merchant.shop);
      if (!skipHeader) await this.metaSender.sendText(senderId, welcomeText, token, merchant.id, 'messenger');
      await this.metaSender.sendCarousel(senderId, products.map(p => ({
        title: p.title,
        subtitle: `$${p.price.toFixed(2)}`,
        imageUrl: p.primaryImage,
        productId: p.id
      })), token, merchant.id);
      await this.session.set(sessionKey, 'BROWSING_PRODUCTS', { merchantId: merchant.id, shop: merchant.shop, products });
    } else {
      const replies = collections.slice(0, 13).map(c => ({
        title: c.title,
        payload: `CAT_${c.id}`
      }));
      await this.metaSender.sendQuickReplies(senderId, skipHeader ? 'Choose a section:' : welcomeText, replies, token, merchant.id, 'messenger');
      await this.session.set(sessionKey, 'BROWSING_CATEGORIES', { merchantId: merchant.id, shop: merchant.shop });
    }
  }

  private async handleCategorySelection(senderId: string, merchant: any, token: string, input: string, context: BotContext) {
    const sessionKey = `msg_${senderId}_${merchant.id}`;
    if (!input.startsWith('CAT_')) {
      return this.handleWelcome(senderId, merchant, token);
    }
    const collectionId = input.replace('CAT_', '');
    const products = await this.shopifyApi.getProductsByCollection(merchant.shop, collectionId);

    if (products.length === 0) {
      await this.metaSender.sendText(senderId, "Nothing here yet 😔", token, merchant.id, 'messenger');
      return this.handleWelcome(senderId, merchant, token);
    }

    await this.metaSender.sendCarousel(senderId, products.map(p => ({
      title: p.title,
      subtitle: `$${p.price.toFixed(2)}`,
      imageUrl: p.primaryImage,
      productId: p.id
    })), token, merchant.id);
    await this.session.updateContext(sessionKey, 'BROWSING_PRODUCTS', { ...context, products });
  }

  private async handleProductSelection(senderId: string, merchant: any, token: string, input: string, context: BotContext) {
    if (!input.startsWith('VIEW_') && !input.startsWith('ADD_')) {
      await this.session.reset(`msg_${senderId}_${merchant.id}`);
      return; // Hand over to human
    }
    const productId = input.replace('VIEW_', '').replace('ADD_', '');
    const product = await this.shopifyApi.getProduct(merchant.shop, productId);

    if (input.startsWith('ADD_')) {
      if (product.variants.length > 1) {
        return this.showProductDetail(senderId, merchant, token, product, context);
      } else {
        const cart = this.session.addToCart(context.cart ?? [], {
          productId: product.id,
          productName: product.title,
          unitPrice: product.price,
          quantity: 1
        });
        await this.session.updateContext(`msg_${senderId}_${merchant.id}`, 'CART', { ...context, cart });
        return this.showAddedToCart(senderId, merchant, token, cart);
      }
    }

    return this.showProductDetail(senderId, merchant, token, product, context);
  }

  async showProductDetail(senderId: string, merchant: any, token: string, product: any, context: BotContext) {
    const sessionKey = `msg_${senderId}_${merchant.id}`;
    const subtitle = `💰 $${product.price.toFixed(2)}${product.description ? '\n' + product.description.substring(0, 70) : ''}`;

    if (product.variants.length > 1) {
      // Multi-variant: Show product card, then variant quick replies
      const cardPayload = {
        message: {
          attachment: {
            type: 'template',
            payload: {
              template_type: 'generic',
              elements: [{
                title: product.title,
                subtitle,
                image_url: product.primaryImage || undefined,
                buttons: [
                  { type: 'postback', title: '🛒 Add to Cart', payload: `ADD_${product.id}` },
                  { type: 'postback', title: '🛍️ Keep Shopping', payload: 'SHOP_NOW' },
                ],
              }],
            },
          },
        },
      };

      await this.metaSender.sendToMeta(token, senderId, cardPayload, merchant.id, 'messenger');

      // Then send variant picker
      const replies = product.variants.slice(0, 13).map(v => ({
        title: v.title,
        payload: `VAR_${v.id}`
      }));
      await this.metaSender.sendQuickReplies(senderId, 'Select a size/variant:', replies, token, merchant.id, 'messenger');
      await this.session.updateContext(sessionKey, 'SELECTING_VARIANT', { ...context, selectedProduct: product });

    } else {
      // Single variant: Show product card with buttons
      const cardPayload = {
        message: {
          attachment: {
            type: 'template',
            payload: {
              template_type: 'generic',
              elements: [{
                title: product.title,
                subtitle,
                image_url: product.primaryImage || undefined,
                buttons: [
                  { type: 'postback', title: '🛒 Add to Cart', payload: `ADD_${product.id}` },
                  { type: 'postback', title: '🛍️ Keep Shopping', payload: 'SHOP_NOW' },
                ],
              }],
            },
          },
        },
      };

      await this.metaSender.sendToMeta(token, senderId, cardPayload, merchant.id, 'messenger');
      await this.session.updateContext(sessionKey, 'VIEWING_PRODUCT', { ...context, selectedProduct: product });
    }
  }

  private async handleVariantSelection(senderId: string, merchant: any, token: string, input: string, context: BotContext) {
    if (!input.startsWith('VAR_')) {
      await this.session.reset(`msg_${senderId}_${merchant.id}`);
      return; // Hand over to human
    }
    const sessionKey = `msg_${senderId}_${merchant.id}`;
    const variantId = input.replace('VAR_', '');
    const product = (context as any).selectedProduct;
    const variant = product.variants.find(v => v.id === variantId);

    if (!variant) return;

    const cart = this.session.addToCart(context.cart ?? [], {
      productId: product.id,
      productName: `${product.title} (${variant.title})`,
      unitPrice: variant.price,
      quantity: 1,
      variantId: variant.id
    });

    await this.session.updateContext(sessionKey, 'CART', { ...context, cart });
    return this.showAddedToCart(senderId, merchant, token, cart);
  }

  private async handleProductAction(senderId: string, merchant: any, token: string, input: string, context: BotContext) {
    if (input.startsWith('ADD_')) {
      const product = (context as any).selectedProduct;
      const cart = this.session.addToCart(context.cart ?? [], {
        productId: product.id,
        productName: product.title,
        unitPrice: product.price,
        quantity: 1
      });
      await this.session.updateContext(`msg_${senderId}_${merchant.id}`, 'CART', { ...context, cart });
      return this.showAddedToCart(senderId, merchant, token, cart);
    }
  }

  private async showAddedToCart(senderId: string, merchant: any, token: string, cart: any[]) {
    const subtotal = this.session.cartSubtotal(cart);
    await this.metaSender.sendQuickReplies(
      senderId,
      `✅ Added to cart!\n🛒 ${cart.length} item(s) — $${subtotal.toFixed(2)}`,
      [
        { title: '✅ Checkout', payload: 'CHECKOUT' },
        { title: '🛍️ Keep Shopping', payload: 'SHOP_NOW' }
      ],
      token,
      merchant.id,
      'messenger'
    );
  }

  private async handleViewCart(senderId: string, merchant: any, token: string, context: BotContext) {
    const cart = context.cart ?? [];
    if (cart.length === 0) {
      return this.metaSender.sendText(senderId, "🛒 Your cart is empty.", token, merchant.id, 'messenger');
    }

    const subtotal = this.session.cartSubtotal(cart);
    const total = subtotal + 5.0;
    let text = "🛒 *Your Cart*\n──────────────────\n";
    cart.forEach(i => {
      text += `- ${i.productName} x${i.quantity} — $${(i.unitPrice * i.quantity).toFixed(2)}\n`;
    });
    text += `──────────────────\nSubtotal: $${subtotal.toFixed(2)}\nDelivery: $5.00\n*Total: $${total.toFixed(2)}*`;

    await this.metaSender.sendButtons(senderId, text, [
      { title: '✅ Checkout', payload: 'CHECKOUT' },
      { title: '🗑️ Clear', payload: 'CLEAR_CART' }
    ], token, merchant.id, 'messenger');
  }

  private async handleCartAction(senderId: string, merchant: any, token: string, input: string, context: BotContext) {
    const sessionKey = `msg_${senderId}_${merchant.id}`;
    if (input === 'CHECKOUT') {
      await this.session.updateContext(sessionKey, 'CHECKOUT_NAME', {});
      return this.metaSender.sendText(senderId, "📋 What's your full name?", token, merchant.id, 'messenger');
    }
    if (input === 'CLEAR_CART') {
      await this.session.reset(sessionKey);
      return this.metaSender.sendText(senderId, "🗑️ Cart cleared.", token, merchant.id, 'messenger');
    }
  }

  private async handleCheckoutName(senderId: string, merchant: any, token: string, text: string, context: BotContext) {
    const sessionKey = `msg_${senderId}_${merchant.id}`;
    if (text.length < 2) return this.metaSender.sendText(senderId, "❌ Please enter a valid name:", token, merchant.id, 'messenger');
    await this.session.updateContext(sessionKey, 'CHECKOUT_ADDRESS', { ...context, buyerName: text });
    return this.metaSender.sendText(senderId, "📍 Your delivery address?", token, merchant.id, 'messenger');
  }

  private async handleCheckoutAddress(senderId: string, merchant: any, token: string, text: string, context: BotContext) {
    const sessionKey = `msg_${senderId}_${merchant.id}`;
    if (text.length < 5) return this.metaSender.sendText(senderId, "❌ Please enter a valid address:", token, merchant.id, 'messenger');
    await this.session.updateContext(sessionKey, 'CHECKOUT_PAYMENT', { ...context, deliveryAddress: text });
    return this.metaSender.sendQuickReplies(senderId, "How would you like to pay?", [
      { title: "💵 Cash on Delivery", payload: "PAY_COD" },
      { title: "💳 Pay by Card", payload: "PAY_CARD" },
      { title: "🏦 Bank Transfer", payload: "PAY_BANK" }
    ], token, merchant.id, 'messenger');
  }

  private async handlePaymentSelection(senderId: string, merchant: any, token: string, input: string, context: BotContext) {
    const sessionKey = `msg_${senderId}_${merchant.id}`;
    const paymentMap = { PAY_COD: 'Cash on Delivery', PAY_CARD: 'Card', PAY_BANK: 'Bank Transfer' };
    const paymentMethod = (paymentMap as any)[input];
    if (!paymentMethod) return;

    try {
      const order = await this.shopifyApi.createOrder(merchant.shop, {
        lineItems: (context.cart as any).map(i => ({ variantId: i.variantId || i.productId, quantity: i.quantity })),
        customerFirstName: (context as any).buyerName,
        customerPhone: senderId,
        shippingAddress: (context as any).deliveryAddress,
        paymentMethod
      });

      // Receipt Template for Messenger
      await this.metaSender.sendReceipt(senderId, {
        buyerName: (context as any).buyerName,
        orderNumber: order.orderNumber,
        items: (context.cart as any).map(i => ({ name: i.productName, qty: i.quantity, price: i.unitPrice, imageUrl: i.imageUrl })),
        subtotal: this.session.cartSubtotal(context.cart ?? []),
        shipping: 5.0,
        total: parseFloat(order.totalPrice),
        paymentMethod
      }, token, merchant.id);

      await this.metaSender.sendQuickReplies(senderId, "🎉 Order confirmed! Want to shop more?", [{ title: "🛍️ Shop Again", payload: "SHOP_NOW" }], token, merchant.id, 'messenger');
      await this.session.set(sessionKey, 'ORDER_COMPLETE', {});
    } catch (e) {
      await this.metaSender.sendText(senderId, `❌ FAILED: ${e.message}`, token, merchant.id, 'messenger');
    }
  }

  private async handleMyOrders(senderId: string, merchant: any, token: string) {
    // Note: Search order history in your local DB (Prisma)
    // assuming we log Shopify orders to a local table or just query Shopify
    // Here we query local order history if available
    const orders = await this.prisma.whatsappMessage.findMany({
      where: { toNumber: senderId, sellerId: merchant.id, direction: 'OUTBOUND' },
      take: 5,
      orderBy: { createdAt: 'desc' }
    });
    
    // Simplification: In a real app, you'd fetch from Shopify orders.json?customer_id=...
    return this.metaSender.sendText(senderId, "📦 *Recent Activity*\n──────────────────\nCheck your orders on Shopify Admin or here in a bit!", token, merchant.id, 'messenger');
  }
}
