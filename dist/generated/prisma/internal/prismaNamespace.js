"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.JsonNullValueInput = exports.SortOrder = exports.PostProductMappingScalarFieldEnum = exports.CommentDmLogScalarFieldEnum = exports.CommentTriggerScalarFieldEnum = exports.ShopifyMerchantScalarFieldEnum = exports.AuditLogScalarFieldEnum = exports.SellerSessionScalarFieldEnum = exports.SellerPluginScalarFieldEnum = exports.PluginScalarFieldEnum = exports.RiderEarningScalarFieldEnum = exports.DeliveryScalarFieldEnum = exports.RiderScalarFieldEnum = exports.ProductImageScalarFieldEnum = exports.OtpCodeScalarFieldEnum = exports.BuyerScalarFieldEnum = exports.BotSessionScalarFieldEnum = exports.WhatsappMessageScalarFieldEnum = exports.PaymentScalarFieldEnum = exports.OrderItemScalarFieldEnum = exports.OrderScalarFieldEnum = exports.ProductScalarFieldEnum = exports.StoreScalarFieldEnum = exports.SellerScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = require("@prisma/client/runtime/client");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.4.2",
    engine: "94a226be1cf2967af2541cca5529f0f7ba866919"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Seller: 'Seller',
    Store: 'Store',
    Product: 'Product',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Payment: 'Payment',
    WhatsappMessage: 'WhatsappMessage',
    BotSession: 'BotSession',
    Buyer: 'Buyer',
    OtpCode: 'OtpCode',
    ProductImage: 'ProductImage',
    Rider: 'Rider',
    Delivery: 'Delivery',
    RiderEarning: 'RiderEarning',
    Plugin: 'Plugin',
    SellerPlugin: 'SellerPlugin',
    SellerSession: 'SellerSession',
    AuditLog: 'AuditLog',
    ShopifyMerchant: 'ShopifyMerchant',
    CommentTrigger: 'CommentTrigger',
    CommentDmLog: 'CommentDmLog',
    PostProductMapping: 'PostProductMapping'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.SellerScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isVerified: 'isVerified'
};
exports.StoreScalarFieldEnum = {
    id: 'id',
    sellerId: 'sellerId',
    slug: 'slug',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    category: 'category',
    city: 'city',
    logoUrl: 'logoUrl'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    sellerId: 'sellerId',
    storeId: 'storeId',
    name: 'name',
    description: 'description',
    price: 'price',
    currency: 'currency',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    stockQty: 'stockQty'
};
exports.OrderScalarFieldEnum = {
    id: 'id',
    sellerId: 'sellerId',
    storeId: 'storeId',
    status: 'status',
    customerName: 'customerName',
    customerPhone: 'customerPhone',
    customerEmail: 'customerEmail',
    totalAmount: 'totalAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    buyerId: 'buyerId',
    deliveryCode: 'deliveryCode',
    notes: 'notes',
    orderNumber: 'orderNumber',
    deliveryAddress: 'deliveryAddress'
};
exports.OrderItemScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    lineTotal: 'lineTotal'
};
exports.PaymentScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    provider: 'provider',
    amount: 'amount',
    currency: 'currency',
    gatewayReference: 'gatewayReference',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.WhatsappMessageScalarFieldEnum = {
    id: 'id',
    sellerId: 'sellerId',
    storeId: 'storeId',
    orderId: 'orderId',
    direction: 'direction',
    toNumber: 'toNumber',
    fromNumber: 'fromNumber',
    content: 'content',
    status: 'status',
    createdAt: 'createdAt'
};
exports.BotSessionScalarFieldEnum = {
    id: 'id',
    phoneNumber: 'phoneNumber',
    state: 'state',
    context: 'context',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
};
exports.BuyerScalarFieldEnum = {
    id: 'id',
    phoneNumber: 'phoneNumber',
    fullName: 'fullName',
    city: 'city',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.OtpCodeScalarFieldEnum = {
    id: 'id',
    phoneNumber: 'phoneNumber',
    code: 'code',
    purpose: 'purpose',
    isUsed: 'isUsed',
    attempts: 'attempts',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
};
exports.ProductImageScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    imageUrl: 'imageUrl',
    isPrimary: 'isPrimary',
    sortOrder: 'sortOrder'
};
exports.RiderScalarFieldEnum = {
    id: 'id',
    phoneNumber: 'phoneNumber',
    fullName: 'fullName',
    nationalId: 'nationalId',
    city: 'city',
    vehicleType: 'vehicleType',
    isVerified: 'isVerified',
    isOnline: 'isOnline',
    rating: 'rating',
    totalDeliveries: 'totalDeliveries',
    createdAt: 'createdAt'
};
exports.DeliveryScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    riderId: 'riderId',
    pickupAddress: 'pickupAddress',
    dropoffAddress: 'dropoffAddress',
    distanceKm: 'distanceKm',
    feeUsd: 'feeUsd',
    platformCut: 'platformCut',
    riderPayout: 'riderPayout',
    status: 'status',
    assignedAt: 'assignedAt',
    pickedUpAt: 'pickedUpAt',
    deliveredAt: 'deliveredAt',
    createdAt: 'createdAt'
};
exports.RiderEarningScalarFieldEnum = {
    id: 'id',
    riderId: 'riderId',
    deliveryId: 'deliveryId',
    amountUsd: 'amountUsd',
    type: 'type',
    status: 'status',
    createdAt: 'createdAt'
};
exports.PluginScalarFieldEnum = {
    id: 'id',
    slug: 'slug',
    name: 'name',
    description: 'description',
    priceUsd: 'priceUsd',
    isFree: 'isFree',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.SellerPluginScalarFieldEnum = {
    id: 'id',
    sellerId: 'sellerId',
    pluginId: 'pluginId',
    isActive: 'isActive',
    config: 'config',
    installedAt: 'installedAt'
};
exports.SellerSessionScalarFieldEnum = {
    id: 'id',
    sellerId: 'sellerId',
    refreshToken: 'refreshToken',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
};
exports.AuditLogScalarFieldEnum = {
    id: 'id',
    actorType: 'actorType',
    actorId: 'actorId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    metadata: 'metadata',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
};
exports.ShopifyMerchantScalarFieldEnum = {
    id: 'id',
    shop: 'shop',
    accessToken: 'accessToken',
    scope: 'scope',
    storeSlug: 'storeSlug',
    storeName: 'storeName',
    whatsappConnected: 'whatsappConnected',
    whatsappNumber: 'whatsappNumber',
    whatsappPhoneId: 'whatsappPhoneId',
    whatsappToken: 'whatsappToken',
    instagramConnected: 'instagramConnected',
    instagramToken: 'instagramToken',
    instagramAccountId: 'instagramAccountId',
    messengerConnected: 'messengerConnected',
    messengerToken: 'messengerToken',
    messengerPageId: 'messengerPageId',
    isActive: 'isActive',
    installedAt: 'installedAt',
    uninstalledAt: 'uninstalledAt',
    updatedAt: 'updatedAt',
    instagramUsername: 'instagramUsername',
    messengerPageName: 'messengerPageName',
    planChargeId: 'planChargeId',
    planName: 'planName',
    planStatus: 'planStatus',
    planTrialExpiresAt: 'planTrialExpiresAt'
};
exports.CommentTriggerScalarFieldEnum = {
    id: 'id',
    merchantId: 'merchantId',
    keyword: 'keyword',
    replyComment: 'replyComment',
    isActive: 'isActive',
    triggerCount: 'triggerCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    templateMessage: 'templateMessage'
};
exports.CommentDmLogScalarFieldEnum = {
    id: 'id',
    merchantId: 'merchantId',
    commenterId: 'commenterId',
    mediaId: 'mediaId',
    keyword: 'keyword',
    sentAt: 'sentAt'
};
exports.PostProductMappingScalarFieldEnum = {
    id: 'id',
    merchantId: 'merchantId',
    platform: 'platform',
    postUrl: 'postUrl',
    mediaId: 'mediaId',
    shopifyProductId: 'shopifyProductId',
    productTitle: 'productTitle',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map