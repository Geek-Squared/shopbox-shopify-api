# 🛍️ Social Post Picker - Frontend Implementation Guide

This guide explains how to use the new Meta API endpoints to allow merchants to pick Facebook and Instagram posts from a list instead of pasting URLs.

---

## 🚀 1. The Endpoints

Both endpoints are protected by the `ShopifyAuthGuard` and require a `shop` query parameter.

### **Facebook Posts**
*   **Method**: `GET`
*   **URL**: `/api/meta/auth/facebook-posts`
*   **Query**: `?shop=your-shop.myshopify.com`

### **Instagram Posts**
*   **Method**: `GET`
*   **URL**: `/api/meta/auth/instagram-posts`
*   **Query**: `?shop=your-shop.myshopify.com`

---

## 📦 2. Response Format

The backend returns a clean, flattened array regardless of the platform:

```json
[
  {
    "id": "122106525512120930",
    "text": "Check out our new Winter Collection! ❄️",
    "url": "https://www.facebook.com/permalink.php?story_fbid=...",
    "imageUrl": "https://scontent.xx.fbcdn.net/...",
    "createdAt": "2024-03-24T21:19:15+0000",
    "type": "mobile_status_update"
  }
]
```

---

## 🎨 3. Recommended UI Workflow

### **Step A: The Selection UI**
Replace the simple text input for "Post URL" with a "Select Post" button. When clicked, it should open a Modal or a Grid showing the fetched posts.

### **Step B: Data Entry**
When a merchant clicks on a post from the grid:
1.  **Media ID**: Store the `post.id` in your mapping logic.
2.  **Post URL**: Automatically fill the `post.url` into your form.
3.  **Preview**: Use the `post.imageUrl` to show a thumbnail so the user knows they selected the right post.

### **Step C: Benefits**
*   **Zero Typos**: No more broken automations from copy-pasting the wrong URL.
*   **Speed**: One-click setup.
*   **Mobile Friendly**: Much easier to pick an image than to copy-paste URLs on a phone screen.

---

## ⚠️ Notes
*   If the user hasn't connected Facebook/Instagram yet, the API will return a `400 Bad Request` with message `"Messenger not connected for this shop"`. 
*   Ensure the frontend handles the case where `imageUrl` might be `null` for text-only posts.
