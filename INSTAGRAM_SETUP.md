# 🤳 Instagram & Messenger Setup Guide

This guide ensures your Meta App and ShopBoxx integration are correctly configured for **Instagram DM**, **Facebook Messenger**, and **Comment-to-DM Automation**.

---

## 🛠️ 1. Meta App Configuration

### A. Core Settings
1. Go to the [Meta App Dashboard](https://developers.facebook.com/).
2. **Product Setup**: 
   - Add **WhatsApp** (already done for ShopBoxx basic).
   - Add **Messenger**.
   - Add **Instagram Graph API**.
3. **App Settings**: 
   - Ensure the **App ID** and **App Secret** are in your `.env`:
     ```env
     META_APP_ID=your_id
     META_APP_SECRET=your_secret
     META_VERIFY_TOKEN=shopboxx-verify-2026
     ```

---

## 🏗️ 2. Webhook Subscriptions

The Meta Webhook expects requests at: `{{APP_URL}}/api/meta/webhook`

### B. Messenger Webhook
1. Go to **Messenger > Settings**.
2. Under **Webhooks**, click **Edit Subscription**.
3. Callback URL: `https://your-domain.com/api/meta/webhook`
4. Verify Token: `shopboxx-verify-2026`
5. **Fields to Subscribe**:
   - `messages`
   - `messaging_postbacks`
   - `messaging_optins`
   - `messaging_referrals` (for ads)

### C. Instagram Webhook
1. Go to **Instagram Graph API > Settings**.
2. Click **Edit Subscription**.
3. Callback URL: same as Messenger.
4. **Fields to Subscribe**:
   - `messages`
   - `comments` (Crucial for automation!)

---

## 🔓 3. Permissions (Scopes)

When a merchant connects through `GET /api/meta/auth/instagram`, the app must have these permissions:

- `instagram_manage_messages` (to read/send DMs)
- `instagram_manage_comments` (to read/reply to comments)
- `instagram_basic` (to see the business profile)
- `pages_messaging` (for Messenger flow)
- `pages_read_engagement`
- `pages_show_list` (to list pages owned by the user)

---

## 🧪 4. Testing the Bot Engine

### A. Testing DM Shopping
1. Initiate OAuth by visiting: `{{APP_URL}}/api/meta/auth/instagram?shop=your-shop.myshopify.com`
2. Follow the login flow and select your **Instagram Business Account**.
3. Go to Instagram and send "hi" to your account.
4. **Behavior**:
   - **Instagram**: Receive numbered text list of products.
   - **Messenger**: Receive a carousel of product cards.

### B. Testing Comment triggers
1. **Create a Trigger**: 
   ```bash
   POST /api/meta/triggers
   Authorization: Bearer <ShopifyJWT>
   { "keyword": "SHOP", "replyComment": true }
   ```
2. **Comment**: Post "SHOP" on any media of that Instagram account.
3. **Behavior**: 
   - The bot will publicly reply: "Hi @username! Check your DMs 😊"
   - The user will receive a DM with a "Browse Store" button.

---

## 📍 5. Postman Testing Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/meta/auth/messenger?shop=...` | Start Messenger OAuth |
| `GET` | `/api/meta/auth/instagram?shop=...` | Start Instagram OAuth |
| `GET` | `/api/meta/webhook` | Meta verification (automatic) |
| `POST` | `/api/meta/webhook` | Incoming event (automatic) |
| `POST` | `/api/meta/triggers` | Create new keyword trigger |
| `GET` | `/api/meta/triggers/stats`| Check trigger performance |

---

## ⚠️ Important Troubleshooting
- **24-Hour Window**: Meta only allows responding to messages within a 24-hour window from the user's last message.
- **Business Account**: Instagram accounts **must** be Business or Creator accounts and linked to a Facebook Page.
- **Webhooks Verification**: If verification fails, check your `META_VERIFY_TOKEN` in `.env`.

─────────────────────────────────────────────────────
**PROJECT:** ShopBoxx
**Status:** Instagram Configuration Guide Created.
─────────────────────────────────────────────────────
