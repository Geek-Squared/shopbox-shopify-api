# 🛍️ Testing ShopBoxx Shopify Module

This guide explains how to test the Shopify OAuth flow and related endpoints using **Postman**.

## ⚙️ 1. Environment Configuration

Ensure your `.env` file contains the required Shopify variables:

```env
SHOPIFY_API_KEY=your_api_key
SHOPIFY_API_SECRET=your_api_secret
SHOPIFY_SCOPES=read_products,write_orders,read_customers,write_customers,read_inventory,write_inventory
APP_URL=http://localhost:3000
```

---

## 🔑 2. Initial OAuth Redirect
### `GET /api/shopify/auth`

Used when a merchant installs the app or initiates the connection.

- **URL:** `{{base_url}}/api/shopify/auth`
- **Params:** 
  - `shop`: `test-merchant.myshopify.com`
- **What to check:**
  - Postman should show a `302 Redirect`.
  - Look at the `Location` header in the response; it should point to `https://test-merchant.myshopify.com/admin/oauth/authorize?...`.
  - Verify that the `client_id`, `scope`, and `redirect_uri` match your settings.

---

## 🔄 3. OAuth Callback (Simulation)
### `GET /api/shopify/auth/callback`

Since this endpoint exchanges a one-time `code` for an access token via the real Shopify API, manual testing is limited unless you have a real store. However, you can test the **HMAC Verification** logic.

- **URL:** `{{base_url}}/api/shopify/auth/callback`
- **Params:**
  - `code`: `any_code`
  - `shop`: `test-merchant.myshopify.com`
  - `state`: `the_state_returned_from_auth`
  - `hmac`: `calculated_signature`
- **Success Criteria:** 
  - If HMAC is wrong, returns `401 Unauthorized`.
  - If state is wrong/expired, returns `401 Unauthorized`.

---

## 🛡️ 4. Authentication Guarded Endpoint
### `GET /api/shopify/merchant`

This endpoint requires a valid Shopify Session Token (JWT).

- **URL:** `{{base_url}}/api/shopify/merchant`
- **Headers:**
  - `Authorization`: `Bearer <signed_jwt>`
- **To Generate a Test JWT:**
  Use [jwt.io](https://jwt.io) or a script to sign a payload with your `SHOPIFY_API_SECRET`.
  **Payload Structure:**
  ```json
  {
    "dest": "https://test-merchant.myshopify.com",
    "aud": "your_api_key",
    "exp": 1893456000
  }
  ```
- **What to check:**
  - `200 OK` with merchant data (excluding `accessToken`).
  - `401 Unauthorized` if `aud` mismatch, token expired, or signature invalid.

---

## 🪝 5. Webhooks Simulation

### `POST /api/shopify/webhooks/app/uninstalled`
- **Headers:** 
  - `x-shopify-shop-domain`: `test.myshopify.com`
- **Effect**: Marks merchant as inactive and clears `accessToken`.

### `POST /api/shopify/webhooks/products/update`
- **Headers**:
  - `x-shopify-shop-domain`: `test.myshopify.com`
- **Effect**: Clears the in-memory product/collection cache for that shop.

---

## 🤳 6. Meta (Instagram & Messenger) Testing

### `GET /api/meta/auth/messenger?shop={{shop}}`
- **Effect**: Returns a 302 redirect to the Facebook Login dialog with Messenger scopes.

### `GET /api/meta/auth/instagram?shop={{shop}}`
- **Effect**: Returns a 302 redirect to the Facebook Login dialog with Instagram scopes.

### `GET /api/meta/webhook` (Verifying)
- **Params**:
  - `hub.mode`: `subscribe`
  - `hub.verify_token`: `your_meta_verify_token`
  - `hub.challenge`: `random_string`
- **Expect**: `random_string` in plain text response.

---

## 💡 Pro Tip: Manual HMAC Calculation
To manually calculate the HMAC for the `/auth/callback` endpoint:
1. Join params as `key=value&key=value` (alphabetical, excluding `hmac`).
2. Use **HMAC-SHA256** with your `SHOPIFY_API_SECRET`.
3. Output as `hex`.

