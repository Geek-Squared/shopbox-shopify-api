# 💬 Automation Triggers Frontend Coordination

This is a quick reference for the frontend team specifically regarding the **"Automation Triggers"** UI (custom keywords and templated messages).

The backend endpoint is ready to save those custom templates.

---

## 🔌 API Endpoints
Base path: `/api/meta/triggers`
Requires: `Authorization: Bearer <Shopify_Session_Token>`

### 1. Create OR Update a Trigger (Upsert)
**`POST /api/meta/triggers`**
Saves a new keyword template, or updates an existing one if the exact `keyword` already exists for this merchant.

**Payload to send from your UI Form:**
```json
{
  "keyword": "PRICE",
  "replyComment": true,
  "templateMessage": "Hello! The current price for {{product_name}} is {{price}}. This includes all taxes and standard shipping. Let us know if you have any other questions!"
}
```
*(Based exactly on the mockup screenshot provided).*

### 2. List All Triggers
**`GET /api/meta/triggers`**
Returns an array of all triggers for the merchant to populate the dashboard list.

**Response Example:**
```json
[
  {
    "id": "cuid123",
    "merchantId": "merchant_cuid",
    "keyword": "PRICE",
    "replyComment": true,
    "templateMessage": "Hello! The current price for {{product_name}} is {{price}}...",
    "isActive": true,
    "triggerCount": 142,
    "createdAt": "2026-03-23T00:00:00.000Z"
  }
]
```

### 3. Update an Active Trigger (Toggle on/off)
**`PUT /api/meta/triggers/:id`**

**Payload Example (if they toggle the system live indicator):**
```json
{
  "isActive": false
}
```

### 4. Get Summary Statistics
**`GET /api/meta/triggers/stats`**
Returns high-level statistics to populate the "TRIGGERS SUMMARY" sidebars.

**Response Example:**
```json
{
  "totalTriggers": 1,
  "totalDmsSent": 142,
  "totalOrdersFromIg": 15
}
```

---

## 🎨 Frontend Implementation Notes

1. **Variables & Liquid tags (`{{product_name}}`)**
   Your UI allows typing out the template with dynamic brackets. **Just send the raw string exactly as the merchant typed it** in the `templateMessage` field. 
   The backend Comment Service will automatically intercept `{{product_name}}` and `{{price}}` and run a regex replace with the actual Shopify data right before sending the DM.

2. **`replyComment: true` or `false`**
   In the UI you have a pill that says "Public Reply." When they toggle this on or off, it directly controls whether the bot will "Like & Reply" to the original post comment, or only send the private DM silently.

Coordinate with this payload spec and the templates will flow right into the database!
