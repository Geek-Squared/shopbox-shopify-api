# Storefront Setup (API-Driven)

## Purpose and Scope
This guide explains how to set up and use the Shopbox backend to power a storefront. It is API-driven and intended for developers. This repository contains the backend only; there is no storefront UI in this codebase.

Supported modules:
- auth
- store
- products
- orders
- payments
- whatsapp
- plugins

## System Overview
### Entities and Relationships
- Seller -> Store -> Products
- Store -> Orders -> Payments
- WhatsApp messages can be linked to Seller, Store, and/or Order

### Happy Path (Shopper Flow)
1. Seller registers and a store is created automatically.
2. Seller adds products.
3. Shoppers fetch the public store catalog.
4. Shoppers place orders.
5. Payments are initiated and verified.
6. (Optional) WhatsApp notifications are sent or inbound messages are recorded.

## Prerequisites
- Node.js and pnpm
- PostgreSQL (or Docker Compose)
- Familiarity with REST APIs and JWT

## Environment Configuration
Required and optional environment variables are validated in `src/config/env.validation.ts`.

Required:
- `DATABASE_URL` (PostgreSQL connection string)
- `JWT_SECRET` (min 32 characters)

Optional:
- `JWT_EXPIRES_IN` (default `86400`)
- `PORT` (default `3000`)
- `ENABLE_SWAGGER` (set to `false` to disable Swagger UI)

Example `.env`:
```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/shopbox?schema=public
JWT_SECRET=replace-with-a-strong-32-char-min-secret
JWT_EXPIRES_IN=86400
ENABLE_SWAGGER=true
```

## Local Setup Steps
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Run database migrations (Prisma):
   ```bash
   pnpm prisma migrate deploy
   ```
3. Start the server:
   ```bash
   pnpm run start:dev
   ```
4. Confirm API prefix is `/api` and Swagger UI is at `/docs` (unless `ENABLE_SWAGGER=false`).

## Core Storefront Flow (Step-by-Step)
1. **Seller registration creates the store** via `POST /api/auth/register`.
2. **Seller creates products** (JWT required) via `POST /api/products`.
3. **Public storefront fetch** via `GET /api/store/:slug` (returns store + products).
4. **Customer creates order** via `POST /api/orders`.
5. **Payment initiation** via `POST /api/payments/initiate`.
6. **Payment verification** via `POST /api/payments/verify`.
7. **Optional WhatsApp notifications** via `POST /api/whatsapp/send`.

## Endpoint Reference (with Examples)
Base URL in examples: `http://localhost:3000/api`

### Auth
**Register** `POST /auth/register`
```bash
curl -sS -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "seller@example.com",
    "password": "password123",
    "name": "Alex",
    "storeSlug": "alex-shop",
    "phone": "+263771234567"
  }'
```
Notes:
- `storeSlug` must match `^[a-z0-9-]{3,32}$`.

**Login** `POST /auth/login`
```bash
curl -sS -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "seller@example.com",
    "password": "password123"
  }'
```
Response includes `accessToken` for seller-authenticated routes.

### Store (Public)
**Get Store by Slug** `GET /store/:slug`
```bash
curl -sS http://localhost:3000/api/store/alex-shop
```
Response includes store fields and active products.

### Products (Seller Only, JWT required)
Use `Authorization: Bearer <accessToken>`.

**List Products** `GET /products`
```bash
curl -sS http://localhost:3000/api/products \
  -H "Authorization: Bearer <accessToken>"
```

**Create Product** `POST /products`
```bash
curl -sS -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <accessToken>" \
  -d '{
    "name": "T-Shirt",
    "description": "Cotton tee",
    "price": 15.99,
    "currency": "USD"
  }'
```

**Get Product** `GET /products/:id`
```bash
curl -sS http://localhost:3000/api/products/<productId> \
  -H "Authorization: Bearer <accessToken>"
```

**Update Product** `PUT /products/:id`
```bash
curl -sS -X PUT http://localhost:3000/api/products/<productId> \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <accessToken>" \
  -d '{
    "price": 17.5,
    "active": true
  }'
```

**Delete Product** `DELETE /products/:id`
```bash
curl -sS -X DELETE http://localhost:3000/api/products/<productId> \
  -H "Authorization: Bearer <accessToken>"
```

### Orders
**Create Order (Public)** `POST /orders`
```bash
curl -sS -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "storeSlug": "alex-shop",
    "customerName": "Jamie",
    "customerPhone": "+263771234568",
    "customerEmail": "jamie@example.com",
    "items": [
      { "productId": "<productId>", "quantity": 2 }
    ]
  }'
```
Notes:
- `items` must contain at least one item.
- `quantity` must be at least 1.

**List Orders (Seller Only)** `GET /orders`
```bash
curl -sS http://localhost:3000/api/orders \
  -H "Authorization: Bearer <accessToken>"
```

**Get Order (Seller Only)** `GET /orders/:id`
```bash
curl -sS http://localhost:3000/api/orders/<orderId> \
  -H "Authorization: Bearer <accessToken>"
```

**Update Order (Seller Only)** `PUT /orders/:id`
```bash
curl -sS -X PUT http://localhost:3000/api/orders/<orderId> \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <accessToken>" \
  -d '{
    "status": "CONFIRMED"
  }'
```

### Payments
**Initiate Payment** `POST /payments/initiate`
```bash
curl -sS -X POST http://localhost:3000/api/payments/initiate \
  -H "Content-Type: application/json" \
  -d '{
    "orderId": "<orderId>",
    "provider": "PAYNOW"
  }'
```

**Verify Payment** `POST /payments/verify`
```bash
curl -sS -X POST http://localhost:3000/api/payments/verify \
  -H "Content-Type: application/json" \
  -d '{
    "paymentId": "<paymentId>",
    "gatewayReference": "gw-ref-123"
  }'
```

**Payment Webhook** `POST /payments/webhook`
```bash
curl -sS -X POST http://localhost:3000/api/payments/webhook \
  -H "Content-Type: application/json" \
  -d '{
    "paymentId": "<paymentId>",
    "gatewayReference": "gw-ref-123",
    "payload": { "provider": "PAYNOW" }
  }'
```

### WhatsApp
**Send Message** `POST /whatsapp/send`
```bash
curl -sS -X POST http://localhost:3000/api/whatsapp/send \
  -H "Content-Type: application/json" \
  -d '{
    "to": "+263771234568",
    "text": "Your order is confirmed",
    "sellerId": "<sellerId>",
    "orderId": "<orderId>"
  }'
```

**Webhook (Inbound)** `POST /whatsapp/webhook`
```bash
curl -sS -X POST http://localhost:3000/api/whatsapp/webhook \
  -H "Content-Type: application/json" \
  -d '{
    "from": "+263771234568",
    "message": "Hello",
    "payload": { "raw": "example" }
  }'
```

### Plugins
**List Plugins** `GET /plugins`
```bash
curl -sS http://localhost:3000/api/plugins \
  -H "Authorization: Bearer <accessToken>"
```

**Delivery Plugin** `POST /plugins/delivery`
```bash
curl -sS -X POST http://localhost:3000/api/plugins/delivery \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <accessToken>" \
  -d '{
    "orderId": "<orderId>",
    "address": "123 Main St"
  }'
```

**Delivery Riders** `POST /plugins/delivery/riders`
```bash
curl -sS -X POST http://localhost:3000/api/plugins/delivery/riders \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <accessToken>" \
  -d '{
    "zone": "all" 
  }'
```

## Behavior Notes and Limits
- Payments are stubbed and return a placeholder checkout URL.
- WhatsApp endpoints only record messages and do not integrate with the real WhatsApp Cloud API.
- Plugin endpoints are stubbed; delivery returns a fixed ETA and riders returns an empty list.

## Testing and Verification
1. Use Swagger UI at `/docs` to inspect schemas.
2. Manual test flow: register a seller (store created), login to get JWT, create products using JWT, fetch public store data by slug, create an order with valid product IDs, initiate and verify payment.
3. Optional: `pnpm run test` for backend sanity.

## Troubleshooting
- `400 Bad Request`: payload validation failed (check required fields and constraints).
- `401 Unauthorized`: missing or invalid JWT for seller routes.
- `404 Not Found`: store, product, or order does not exist or is not owned by the seller.

## Next Steps
1. Map frontend pages to endpoints. Examples: catalog page -> `GET /api/store/:slug`, product management -> `GET/POST /api/products`, checkout -> `POST /api/orders` then `POST /api/payments/initiate`.
2. Replace stubbed payments and WhatsApp endpoints with real provider integrations.
