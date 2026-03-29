# Shopbox Pricing Strategy & Market Analysis (Global Market)

This document outlines the proposed pricing strategy for Shopbox, designed to scale from small international boutiques to established high-volume D2C brands. This structure will serve as the blueprint for the frontend team to implement the pricing page.

## 1. Core Pricing Philosophy
Given an international user base, we must balance **accessibility** (for emerging markets, individual creators, and newly launched stores) with **value capture** (for massive brands doing thousands of dollars in automated DM sales).

**The chosen model: Hybrid Tiered (Subscription + Usage Limits)**
Instead of charging a flat fee regardless of success, we charge a base subscription that includes a generous "allowance" of automated DMs. Once a store goes viral, they upgrade or pay overage. This aligns our revenue perfectly with their success.

---

## 2. Recommended Pricing Tiers (Priced in USD)
*Pricing in USD is the standard for Shopify apps globally. We recommend keeping it in USD to avoid complex currency exchange management in the early stages, relying on Shopify's native billing API to handle local conversions for the merchants.*

**Annual Discount:** All paid tiers should offer an Annual subscription option at a **20% discount**. The Shopify Billing API supports this natively. Annual plans drastically reduce churn and provide crucial upfront cash flow for the business.

### 🟢 Tier 1: Free (The "Hook")
**Goal:** Reduce friction to zero. Let them experience the "magic" of automating their first few sales. Perfect for micro-influencers or stores just starting out.
*   **Price:** $0 / month
*   **Limits:** Up to 100 Automated DMs / month.
*   **Features:**
    *   1 Connected Social Account (Instagram OR Messenger).
    *   Up to 3 Active Comment Triggers.
    *   Basic Product Cards (Standard layout).
    *   "Powered by Shopbox" subtle branding on the first DM.
*   **Upgrade Trigger:** When their Reel goes slightly viral and they hit 100 comments.

### 🟡 Tier 2: Starter / Creator (The Baseline)
**Goal:** Affordable entry-point for serious creators and small boutiques globally. Priced low enough that it's a "no-brainer" business expense even in lower-GDP countries.
*   **Price:** $19.00 / month
*   **Limits:** Up to 1,000 Automated DMs / month.
*   **Features:**
    *   2 Connected Social Accounts (IG + Messenger).
    *   Unlimited Active Comment Triggers.
    *   Remove "Powered by Shopbox" branding.
    *   Basic Analytics (DMs sent, basic click tracking).
*   **Upgrade Trigger:** Consistent daily sales volume via social media.

### 🟠 Tier 3: Growth / Pro (The Revenue Driver)
**Goal:** This is where the bulk of your MRR (Monthly Recurring Revenue) should come from. Targeting brands spending money on Meta Ads and needing robust automation.
*   **Price:** $49.00 / month *(Sweet spot for Shopify apps)*
*   **Limits:** Up to 5,000 Automated DMs / month.
*   **Features:**
    *   Everything in Starter.
    *   Up to 5 Connected Social Accounts (prep for TikTok/WhatsApp future).
    *   Advanced Analytics (Conversion tracking, Revenue generated dashboard).
    *   Smart Fallbacks (Alternative phrasing if Meta blocks a message).
    *   Priority Email Support.
*   **Overage:** $0.01 per additional DM explicitly triggered past 5,000.

### 🔴 Tier 4: Scale / Enterprise
**Goal:** For agencies managing multiple brands or mega-viral stores.
*   **Price:** $149.00 / month
*   **Limits:** Up to 25,000 Automated DMs / month.
*   **Features:**
    *   Everything in Growth.
    *   Unlimited Social Accounts for the same connected store.
    *   White-glove onboarding via Zoom.
    *   Early access to new platform integrations (TikTok, X, etc.).

---

## 3. Alternative Approaches We Weighed (And why Hybrid won)

### Option A: Pure Flat-Rate SaaS ($29/mo for everything)
*   **Pros:** Very easy for the frontend to build. Easy for the customer to understand.
*   **Cons:** You leave massive money on the table. A store making $100k/mo from your bot pays the exact same as a store making $100/mo. Not sustainable for your server costs if a huge client goes viral.

### Option B: Pure Usage-Based (Pay-As-You-Go: $0.02 per DM)
*   **Pros:** Perfectly aligned with value. Zero barrier to entry.
*   **Cons:** Revenue is wildly unpredictable for you as the founder. Merchants hate unpredictability in their monthly bills; they fear a viral video will bankrupt them before they process the orders.

### Option C: Commission-Based (Take 1% of sales generated)
*   **Pros:** Infinite upside.
*   **Cons:** Almost impossible to track perfectly accurately unless you process the payment yourself. High churn risk (merchants hate giving up percentages of gross revenue).

### Conclusion: The Hybrid Model
By capping the DMs per tier, you protect your server costs (OpenAI/Meta API calls aren't free), you guarantee a baseline MRR, and you still force highly successful stores to move up the pricing ladder.

---

## 4. Next Steps for Frontend Team
To implement this on the frontend, the team will need:
1.  **A clean pricing table component** with 3 distinct columns (Free, Starter, Pro), highlighting "Pro" as the most popular.
2.  **Clear limits messaging:** UI tooltips explaining what an "Automated DM" means (e.g., "One successful message sent in response to a comment").
3.  **Billing integration:** Preparing the UI to trigger the `Shopify Billing API` modal when a user clicks "Upgrade" on a tier, passing the selected plan name back to the NestJS backend.
4.  **Usage Progress Bar (Non-Negotiable):** A prominent widget in the dashboard header (e.g., *“450 / 1,000 DMs used this month. [Upgrade]”*). Merchants panic at unexpected overage charges. You MUST clearly communicate overage models (like the $0.01/DM limit on Growth) *before* they hit the limit, not after. Build and prioritize this widget above all else on the frontend.
