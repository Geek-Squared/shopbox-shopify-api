# Frontend Implementation Guide: Billing & Automation 💎🤖

This guide documents the new backend features and API changes required for final Shopify App Store approval.

---

## 1. 💳 Mandatory Shopify Billing

Merchants must now be on an active plan to use the automated bot features.

### A. Check Plan Status
Call this on the dashboard home to decide whether to show "Upgrade" banners.
- **Endpoint**: `GET /api/shopify/billing/status`
- **Response**:
```json
{
  "planName": "PRO", // or NULL
  "status": "ACTIVE", // or NULL, PENDING, EXPIRED
  "isTrial": true
}
```

### B. Get DM Usage (Progress Bar Widget)
Call this on the dashboard home to render the usage progress bar. **Non-negotiable** per the pricing strategy.
- **Endpoint**: `GET /api/shopify/billing/usage`
- **Response**:
```json
{
  "planName": "PRO",
  "dmSentThisMonth": 450,
  "dmLimit": 5000,
  "percentUsed": 9,
  "dmPeriodStart": "2026-03-01T00:00:00.000Z"
}
```
**Usage**: Render as `"450 / 5,000 DMs used this month"` with a progress bar. If `percentUsed >= 80`, show a yellow warning. If `percentUsed >= 100`, show a red banner and block automation features with an Upgrade CTA.

### B. Request Subscription (Initiate Payment)
Call this when a merchant clicks "Start 7-Day Trial" or "Upgrade to Pro".
- **Endpoint**: `POST /api/shopify/billing/subscribe`
- **Body**: `{ "plan": "BASIC" | "PRO", "mock": boolean }`
- **Response**:
```json
{
  "confirmationUrl": "https://admin.shopify.com/store/xxx/charge/yyy/confirm",
  "subscriptionId": "gid://shopify/AppSubscription/..."
}
```
**CRITICAL**: The frontend **MUST** redirect the user to the `confirmationUrl` returned.

### C. Developer Mock Mode 🧪
If Shopify throws it's "Apps without public distribution" error, you can bypass the real payment for testing:
- **Body**: `{ "plan": "PRO", "mock": true }`
- This will instantly mark the store as **ACTIVE** in the database without any real credit card approval.

---

## 2. 📝 Automation Trigger Templates (Custom DMs)

You can now send custom direct messages when a comment is detected.

### A. New API Field
The `CreateTriggerDto` now includes `templateMessage`. Adding this will replace the generic "Welcome" block with your custom message.

### B. Dynamic Template Variables
The bot now supports real-time variable replacement. Offer these to your users in the UI:
- `{{commenter_name}}`: Replaced with the user's name (e.g., "John Doe").
- `{{store_name}}`: Replaced with the merchant's current Shopify shop name.
- `{{product_name}}`: (If linked to a post) The title of the Shopify product.
- `{{price}}`: (If linked to a post) The price (e.g., "$49.99").

---

## 3. 🛡️ GDPR Checklist (Dashboard Setup)

The backend endpoints are ready. You **MUST** register these in the **Shopify Partner Dashboard > App Setup > GDPR webhooks**:

1. **Customer data request**: `https://<YOUR_DOMAIN>/api/shopify/webhooks/customers/data_request`
2. **Customer redact**: `https://<YOUR_DOMAIN>/api/shopify/webhooks/customers/redact`
3. **Shop redact**: `https://<YOUR_DOMAIN>/api/shopify/webhooks/shop/redact`

---

## 🛰️ Other "Under the Hood" Improvements

1. **Auto Store Sync**: If a merchant renames their store in Shopify, Shopbox now updates automatically—no action needed from the frontend.
2. **Global Overrides**: If a user types an automation "Keyword" while in the middle of a shopping cart session, the bot will now **instantly override** and send the trigger response.
3. **GraphQL Adoption**: All backend-to-Shopify communication has been migrated to the GraphQL Admin API for faster performance and App review compliance.

---

**Everything is ready for the May 1st launch!** 🚀💎🎯🦾🦾
