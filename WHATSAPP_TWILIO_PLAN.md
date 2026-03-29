# 📱 WhatsApp Comment-to-DM via Twilio — Implementation Plan

> **Project**: Shopbox (NestJS + Prisma + Shopify)  
> **Feature**: When a user comments a keyword on an Instagram/Facebook post, the merchant's bot automatically sends them a product DM — **now also over WhatsApp** (Twilio), in addition to the existing Instagram DM and Messenger flows.

---

## 🗺️ Current Architecture Summary

| Layer | What Exists |
|-------|-------------|
| **Comment detection** | `CommentTriggerService` handles both Instagram & Facebook comments, matches keywords, finds `PostProductMapping`, and routes to `InstagramBotService` or `MessengerBotService` |
| **Instagram DM** | `InstagramBotService` + `MetaSenderService` — full bot with state machine, cart, checkout |
| **Messenger DM** | `MessengerBotService` — full bot mirroring Instagram logic |
| **Native WhatsApp** | `WhatsappService` (Meta Cloud API) — used for merchant notifications (order alerts, OTPs). No product bot yet |
| **Session store** | `BotSessionService` (Prisma `BotSession` model, keyed by `ig_<id>_<merchantId>`, `msg_<id>_<merchantId>`) |
| **Database** | Prisma — `ShopifyMerchant` has `whatsappConnected`, `whatsappNumber`, `whatsappPhoneId`, `whatsappToken` fields already |

### Why Twilio instead of (or in addition to) the existing Meta WhatsApp SDK?

The existing `WhatsappService` uses **Meta's Cloud API directly** and is used only for outbound notifications. Twilio's WhatsApp Business API provides:
- A simpler sandbox for development/testing (no business verification needed initially)
- Better international reach and delivery guarantees
- Built-in number fallback and status webhooks
- The merchant's **phone number is the opt-in touch point** — users comment, get a reply asking them to WhatsApp the store, and a two-way bot session starts

---

## 🎯 Feature Goal

```
User comments "price" on Instagram post
        ↓
CommentTriggerService detects keyword match
        ↓
1. Instagram Private Reply (existing)        ← still runs
2. Instagram DM product card (existing)      ← still runs  
3. [NEW] WhatsApp via Twilio                ← NEW CHANNEL
   - Public reply now includes: "WhatsApp us: wa.me/<merchant_number>"
   - When user WhatsApps the merchant, bot auto-shows the product
   - Full shopping session: Browse → Cart → Checkout → Shopify Order
```

---

## 📐 Architecture Diagram

```
[Instagram / Facebook Post]
         │ comment with keyword
         ▼
[Meta Webhook] → meta-webhook.controller.ts
         │
         ▼
[CommentTriggerService]
   ├── handleInstagramComment()   ← existing (unchanged)
   ├── handleFacebookComment()    ← existing (unchanged)
   └── [NEW] Append WA opt-in link to public comment reply
             (when merchant.twilioWhatsappEnabled)

User clicks wa.me link → opens WhatsApp → sends "SHOP"
         │
         ▼
[POST /api/twilio/webhook]
         │
         ▼
[TwilioController] → validates Twilio signature
         │
         ▼
[TwilioBotService.handle()]
   - Lookup merchant by "To" phone number
   - Process state machine (same as InstagramBotService)
   - Send product cards, handle cart, create Shopify orders
```

---

## 🗄️ Phase 1 — Database Schema Changes

### 1.1 `ShopifyMerchant` additions

Add to `prisma/schema.prisma`:

```prisma
model ShopifyMerchant {
  // ... all existing fields ...

  // Twilio WhatsApp (new)
  twilioWhatsappEnabled   Boolean  @default(false)
  twilioWhatsappNumber    String?  // Merchant's public WA number e.g. "+263771234567"
  twilioAccountSid        String?  // Optional per-merchant override
  twilioAuthToken         String?  // Optional per-merchant override
}
```

> **Note**: `twilioAccountSid` / `twilioAuthToken` can be global env vars initially, made per-merchant later.

### 1.2 Reuse `BotSession` (no new model needed)

The existing `BotSession.phoneNumber` key is already generic. New prefix for Twilio sessions:

| Channel | Session key format |
|---------|--------------------|
| Instagram | `ig_<commenterId>_<merchantId>` |
| Messenger | `msg_<commenterId>_<merchantId>` |
| **Twilio WA** | `wa_<userPhone>_<merchantId>` ← new |

### 1.3 Optional: `UserChannel` linking table

Lets future comment triggers skip the opt-in step for known users (Instagram ID → WA phone mapping):

```prisma
model UserChannel {
  id          String   @id @default(cuid())
  merchantId  String
  instagramId String?
  fbUserId    String?
  waPhone     String?
  createdAt   DateTime @default(now())
  
  @@index([merchantId, instagramId])
  @@unique([merchantId, waPhone])
}
```

### Migration command

```bash
npx prisma migrate dev --name add_twilio_whatsapp_fields
```

---

## 📦 Phase 2 — New Module: `src/modules/twilio/`

### File structure

```
src/modules/twilio/
├── twilio.module.ts
├── twilio.service.ts             # Twilio REST API wrapper
├── twilio-bot.service.ts         # Shopping bot state machine
├── twilio-comment-dm.service.ts  # Glue: called from CommentTriggerService
├── twilio.controller.ts          # POST /api/twilio/webhook
└── dto/
    └── twilio-webhook.dto.ts
```

### 2.1 `twilio.service.ts` — Core API wrapper

```typescript
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import twilio from 'twilio';

@Injectable()
export class TwilioService {
  private readonly logger = new Logger(TwilioService.name);
  private client: twilio.Twilio;
  private fromNumber: string; // e.g. "whatsapp:+14155238886"

  constructor(private readonly config: ConfigService) {
    const sid = config.get<string>('TWILIO_ACCOUNT_SID');
    const token = config.get<string>('TWILIO_AUTH_TOKEN');
    this.fromNumber = config.get<string>('TWILIO_WHATSAPP_FROM');
    this.client = twilio(sid, token);
  }

  async sendText(to: string, body: string): Promise<boolean> {
    try {
      await this.client.messages.create({
        from: this.fromNumber,
        to: `whatsapp:${to}`,
        body,
      });
      return true;
    } catch (err) {
      this.logger.error(`Twilio sendText failed: ${err.message}`);
      return false;
    }
  }

  async sendMedia(to: string, body: string, mediaUrl: string): Promise<boolean> {
    try {
      await this.client.messages.create({
        from: this.fromNumber,
        to: `whatsapp:${to}`,
        body,
        mediaUrl: [mediaUrl],
      });
      return true;
    } catch (err) {
      this.logger.error(`Twilio sendMedia failed: ${err.message}`);
      return false;
    }
  }

  validateSignature(url: string, params: Record<string, string>, sig: string): boolean {
    const authToken = this.config.get<string>('TWILIO_AUTH_TOKEN') ?? '';
    return twilio.validateRequest(authToken, sig, url, params);
  }
}
```

### 2.2 `twilio-bot.service.ts` — Shopping bot

Mirrors `InstagramBotService` logic but adapted for plain-text WhatsApp:
- Reuses `BotSessionService`, `ShopifyApiService`, `ShopifyRepository` (same DI)
- Session key: `wa_<userPhone>_<merchantId>`
- No quick-reply bubbles — uses numbered text menus instead
- Product images sent via `sendMedia()` if image URL available
- Checkout flow identical to Instagram bot (name → address → payment → Shopify order)
- State machine: `IDLE → BROWSING_CATEGORIES → BROWSING_PRODUCTS → VIEWING_PRODUCT → CART → CHECKOUT_NAME → CHECKOUT_ADDRESS → CHECKOUT_PAYMENT → ORDER_COMPLETE`

### 2.3 `twilio-comment-dm.service.ts`

Called by `CommentTriggerService`. Since Instagram doesn't expose commenter phone numbers, this service only generates the opt-in message to append to the public reply.

```typescript
@Injectable()
export class TwilioCommentDmService {
  getOptInText(merchantWaNumber: string): string {
    return `💬 Order via WhatsApp: wa.me/${merchantWaNumber.replace('+', '')}?text=SHOP`;
  }
}
```

If a `waPhone` is known for the commenter (from `UserChannel` table), it can also send a **direct** WA DM:

```typescript
async sendDirectProductDm(to: string, product: any, shop: string): Promise<boolean> {
  const body = [
    `👋 You commented on our post!`,
    ``,
    `🛍️ *${product.title}* — $${product.price.toFixed(2)}`,
    ``,
    `Reply *SHOP* to order on WhatsApp 🛒`,
  ].join('\n');

  const imageUrl = product.primaryImage || product.images?.[0];
  if (imageUrl) {
    return this.twilioService.sendMedia(to, body, imageUrl);
  }
  return this.twilioService.sendText(to, body);
}
```

### 2.4 `twilio.controller.ts` — Webhook receiver

```typescript
@Controller('twilio')
export class TwilioController {

  @Post('webhook')
  @HttpCode(200)
  async receiveMessage(
    @Headers('x-twilio-signature') signature: string,
    @Req() req: Request,
    @Body() body: any,
  ) {
    // 1. Validate Twilio signature
    const webhookUrl = `${this.config.get('TWILIO_WEBHOOK_BASE_URL')}/api/twilio/webhook`;
    const isValid = this.twilioService.validateSignature(webhookUrl, body, signature);
    if (!isValid) {
      this.logger.warn('Invalid Twilio signature');
      return '<Response/>';
    }

    // 2. Parse message
    const from = body.From?.replace('whatsapp:', '');  // user's phone
    const to = body.To?.replace('whatsapp:', '');      // merchant's WA number
    const text = (body.Body ?? '').trim();

    // 3. Find merchant by 'To' number
    const merchant = await this.prisma.shopifyMerchant.findFirst({
      where: { twilioWhatsappNumber: to, twilioWhatsappEnabled: true },
    });
    if (!merchant) return '<Response/>';

    // 4. Route to bot (async, don't block the 200 response)
    this.twilioBotService.handle(from, merchant.id, text).catch(console.error);

    return '<Response/>';
  }
}
```

---

## 🔗 Phase 3 — Hook into `CommentTriggerService`

### 3.1 `handleInstagramComment()` — public reply update

In step 8 (public reply), modify the reply message to include WA opt-in when enabled:

```typescript
// ── 8. Public reply (existing, now extended) ───────────────────────────────
if (matchingTrigger.replyComment) {
  const baseReply = postMapping && fetchedProduct
    ? `Hi @${commenterUsername}! We've sent you a DM with the details 😊`
    : `Hi @${commenterUsername}! Thanks for your interest! DM us to order 😊`;

  // [NEW] Append WA opt-in link
  const waOptIn = merchant.twilioWhatsappEnabled && merchant.twilioWhatsappNumber
    ? `\n💬 Also order on WhatsApp: wa.me/${merchant.twilioWhatsappNumber.replace('+', '')}?text=SHOP`
    : '';

  const replyMessage = baseReply + waOptIn;

  await fetch(
    `https://graph.facebook.com/v21.0/${commentId}/replies?access_token=${instagramToken}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: replyMessage }),
    },
  );
}
```

### 3.2 `handleFacebookComment()` — same pattern

Apply the same `waOptIn` append to the Facebook comment reply.

---

## 📲 Phase 4 — Full User Journey

```
1. User comments "price" on Instagram post

2. Public reply appears:
   "Hi @user! Check your DMs 📥
    💬 Also order on WhatsApp: wa.me/2637712345?text=SHOP"

3. User taps the wa.me link → WhatsApp opens → pre-filled "SHOP" message → sends it

4. Twilio webhook fires → POST /api/twilio/webhook
   - from = user's phone number
   - to = merchant's WhatsApp number
   - body = "SHOP"

5. TwilioBotService detects "SHOP" as welcome trigger
   → Shows product categories (if any) or product list

6. Full bot session:
   Browse → Select Product → Add to Cart → Name → Address → Payment
   → Shopify order created via ShopifyApiService.createOrder()
   → "🎉 Order Confirmed! #12345" sent via Twilio

7. Session stored in BotSession with key "wa_<phone>_<merchantId>"
```

---

## ⚙️ Phase 5 — Environment Variables

Add to `.env` (and `.env.example`):

```env
# Twilio WhatsApp
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
TWILIO_WEBHOOK_BASE_URL=https://shopbox-api.railway.app
```

---

## 🛒 Phase 6 — Merchant Dashboard UI

Add a "WhatsApp (Twilio)" section to the Shopify app settings page:

| UI Element | Purpose |
|------------|---------|
| Enable toggle | Sets `twilioWhatsappEnabled` |
| WhatsApp Number input | Sets `twilioWhatsappNumber` (shown in comment replies) |
| Test button | Sends a test WA message to the merchant's own number |
| Status indicator | Shows if Twilio webhook is configured and receiving |

---

## 🔐 Phase 7 — Security

| Concern | Mitigation |
|---------|------------|
| Fake Twilio webhooks | `twilio.validateRequest()` on every POST |
| Message flooding | Reuse `CommentDmLog` — one entry per (merchant, commenter, post) |
| Phone exposure | Never log raw WA numbers in plain text |
| Credential leaking | All Twilio creds in env vars; never return in API responses |

---

## 📋 Complete Implementation Checklist

### Backend

- [ ] Add `twilioWhatsappEnabled`, `twilioWhatsappNumber`, `twilioAccountSid`, `twilioAuthToken` to `ShopifyMerchant` in `schema.prisma`
- [ ] Run `npx prisma migrate dev --name add_twilio_whatsapp_fields`
- [ ] `pnpm add twilio`
- [ ] Create `src/modules/twilio/twilio.service.ts`
- [ ] Create `src/modules/twilio/twilio-bot.service.ts`
- [ ] Create `src/modules/twilio/twilio-comment-dm.service.ts`
- [ ] Create `src/modules/twilio/twilio.controller.ts`
- [ ] Create `src/modules/twilio/dto/twilio-webhook.dto.ts`
- [ ] Create `src/modules/twilio/twilio.module.ts`
- [ ] Register `TwilioModule` in `AppModule`
- [ ] Inject `TwilioCommentDmService` into `MetaModule` / `CommentTriggerService`
- [ ] Update `handleInstagramComment()` public reply with WA opt-in link
- [ ] Update `handleFacebookComment()` public reply with WA opt-in link
- [ ] Add all env vars to `.env.example`, Railway, local `.env`
- [ ] *(Optional)* Add `UserChannel` model to `schema.prisma` for IG↔WA linking

### Frontend (Shopify App)

- [ ] Add "WhatsApp Channel" section to merchant settings page
- [ ] Wire `twilioWhatsappEnabled` toggle → `PATCH /api/shopify/merchant`
- [ ] Add `twilioWhatsappNumber` input field
- [ ] Add "Send Test Message" button

### Testing

- [ ] Configure Twilio sandbox (`pnpm add twilio`, use sandbox number)
- [ ] E2E test: comment on post → public reply has WA link → tap link → bot session starts → product shown → order created in Shopify
- [ ] Anti-spam test: second comment on same post doesn't trigger a second DM
- [ ] Signature validation test: spoofed webhook returns `<Response/>` with no action
- [ ] Merchant with `twilioWhatsappEnabled=false` skips all Twilio logic

---

## 📅 Estimated Timeline

| Phase | Effort |
|-------|--------|
| Phase 1 — DB migration | ~30 min |
| Phase 2 — Twilio module (all 5 files) | ~3–4 hrs |
| Phase 3 — CommentTrigger hook | ~1 hr |
| Phase 5 — Env vars & config | ~30 min |
| Phase 6 — Frontend UI | ~2–3 hrs |
| Testing & tweaks | ~2 hrs |
| **Total** | **~9–11 hrs** |

---

## 🔑 Key Decisions Needed Before Starting

> [!IMPORTANT]
> Please confirm these before implementation:

1. **Twilio vs. Meta Cloud API**: Use the new Twilio SDK (easier sandbox, no business verification) or extend the existing `WhatsappService` (Meta Cloud API, avoids new dependency)?  
   → **Recommendation**: Twilio for faster dev + sandbox testing.

2. **Opt-in only?**: Since Instagram/Facebook don't share commenter phone numbers, the wa.me opt-in link in the public reply is the only viable outreach path — unless merchants pre-collect customer WA numbers. Is this acceptable?

3. **Shared vs. per-merchant Twilio account**: Start with one global Twilio account (simpler) or per-merchant credentials from day 1?

4. **`UserChannel` linking table**: Build now (enables direct WA DMs for returning customers) or defer?

5. **WhatsApp Business templates**: Business-initiated WA messages outside a user-opened 24-hr window require pre-approved Twilio templates. For the opt-in flow (user messages first), this isn't needed. Confirm the flow direction.
