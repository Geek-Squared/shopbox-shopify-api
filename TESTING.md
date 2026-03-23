# Shopbox API Testing Guide

This guide provides a step-by-step flow to test the Shopbox API from account creation to order fulfillment.

## Prerequisites
- Base URL: `http://localhost:3000/api` (default)
- Tool: `curl`, Postman, or any HTTP client.

---

## 1. Seller Onboarding Flow

### Step 1.1: Registration
Create a new seller account.

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "+263771234567",
    "password": "securepassword123",
    "name": "John Doe",
    "storeSlug": "johns-bakery",
    "email": "[EMAIL_ADDRESS]"
  }'
```

### Step 1.1: Request WhatsApp OTP
Trigger an OTP message to the registered phone number.

```bash
curl -X POST http://localhost:3000/api/auth/otp \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "+263771234567"
  }'
```

### Step 1.3: Verify OTP (Optional/Mock)
Verify the OTP received.
> [!NOTE]
> During development, you can check the server logs to see the generated OTP if Twilio is not fully configured for your number.

```bash
curl -X POST http://localhost:3000/api/auth/otp \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "+263771234567",
    "code": "123456"
  }'
```

### Step 1.4: Login
Get your access token.

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "phone": "+263771234567",
    "password": "securepassword123"
  }'
```
**Response:** Save the `accessToken` from the response to use in the `Authorization` header for subsequent requests.

---

## 2. Store & Profile Management (Authenticated)

### Step 2.1: Get Profile
```bash
curl -X GET http://localhost:3000/api/sellers \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Step 2.2: Update Store Details
```bash
curl -X PATCH http://localhost:3000/api/store \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "description": "Best organic bread in town",
    "address": "123 Baker Street, Harare"
  }'
```

---

## 3. Product Management (Authenticated)

### Step 3.1: Create a Product
```bash
curl -X POST http://localhost:3000/api/products \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Sourdough Bread",
    "description": "Freshly baked sourdough",
    "price": 5.50,
    "currency": "USD",
    "stockQty": 20
  }'
```
**Response:** Copy the product `id` for the next steps.

---

## 4. Customer Checkout Flow (Public)

### Step 4.1: View Public Store
```bash
curl -X GET http://localhost:3000/api/store/johns-bakery
```

### Step 4.2: Place an Order
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "storeSlug": "johns-bakery",
    "customerName": "Jane Smith",
    "customerPhone": "+263770000000",
    "items": [
      {
        "productId": "PRODUCT_ID_FROM_STEP_3_1",
        "quantity": 2
      }
    ]
  }'
```

---

## 5. Order Management (Authenticated)

### Step 5.1: List Orders
```bash
curl -X GET http://localhost:3000/api/orders \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

### Step 5.2: Update Order Status
```bash
curl -X PUT http://localhost:3000/api/orders/ORDER_ID \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed"
  }'
```
