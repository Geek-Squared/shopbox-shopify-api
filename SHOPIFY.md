# 🛍️ Shopify & Meta Integration Checklist

This document tracks the progress of the Shopify App ecosystem and Omni-channel integration for **ShopBoxx**.

---

## ✅ 1. Shopify OAuth & Merchant Core
Status: **COMPLETE**

- [x] **OAuth Redirect**: `GET /api/shopify/auth` generates secure state nonces and redirects to Shopify.
- [x] **OAuth Callback**: `GET /api/shopify/auth/callback` verifies HMAC, validates state, and exchanges code for access tokens.
- [x] **Database Persistence**: `ShopifyMerchant` model created in Prisma to store credentials and connection states.
- [x] **Authentication Guard**: `ShopifyAuthGuard` verifies JWT Session Tokens from Shopify App Bridge with strict **audience** (API Key) checks.
- [x] **App Usage Decorator**: `@CurrentShop()` implemented for easy access to the authenticated shop in controllers.

---

## ✅ 2. Shopify REST API Wrapper (`ShopifyApiService`)
Status: **COMPLETE**

- [x] **Product Pulling**: Methods to fetch full product details from Shopify with clean data mapping.
- [x] **Collection Support**: Supports fetching both Custom and Smart Shopify collections.
- [x] **Order Creation**: Logic to push chat-originated orders back to Shopify Admin.
- [x] **Intelligent Caching**: In-memory caching for products (5m) and collections (10m).
- [x] **Cache Synchronization**: `products/update` webhook automatically clears cache for real-time inventory updates.
- [x] **Webhook Registration**: Automated logic to register mandatory Shopify webhooks.

---

## ✅ 3. Meta (Instagram & Messenger) Module
Status: **COMPLETE**

- [x] **Omni-channel OAuth**: Meta Login flows for both Facebook Messenger and Instagram DM.
- [x] **Page Selection**: Handles multiple Facebook pages with a selector-ready redirection logic.
- [x] **Webhook Architecture**: Unified `POST /api/meta/webhook` to handle both Messenger and Instagram events.
- [x] **Channel Detection**: Logic to distinguish between IG and Messenger payloads.
- [x] **Unified Inbox**: Automatic logging of cross-channel inbound messages into the `WhatsappMessage` table for unified history tracking.

---

## ✅ 4. Security & Infrastructure
Status: **COMPLETE**

- [x] **Signature Verification**: HMAC-SHA256 signature verification for all Shopify and Meta webhooks.
- [x] **Environment Validation**: Joi-based validation for all required `SHOPIFY_` and `META_` env variables.
- [x] **Repository Pattern**: `ShopifyRepository` added for clean DB access abstraction.
- [x] **Scalability**: Designed for multi-merchant usage with per-shop configuration.

---

## 🚀 Next Priorities
1. [ ] **Instagram Bot Engine**: Route incoming IG messages to the multi-state bot engine.
2. [ ] **Messenger Bot Engine**: Route Messenger interactions to the bot engine.
3. [ ] **Comment-to-DM Logic**: Implement automation for replying to post comments with a DM trigger.
4. [ ] **Polaris Frontend**: (If needed) Start building the embedded Shopify UI.

─────────────────────────────────────────────────────
**PROJECT:** ShopBoxx
**Status:** Core Infrastructure 100% Ready.
─────────────────────────────────────────────────────
