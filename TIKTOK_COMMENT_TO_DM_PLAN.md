# 🎵 TikTok Comment-to-DM — Implementation Plan

> **Project**: Shopbox (NestJS + Prisma + Shopify)  
> **Feature**: Detect TikTok comments with keywords and trigger an automated DM flow that sends product information and drives Shopify purchases.

---

## ⚠️ Critical Realities — Read First

> [!IMPORTANT]
> TikTok's API landscape is **fundamentally different** from Meta's. Before any code is written, these platform constraints must be understood:

| Capability | Instagram (existing) | TikTok |
|------------|----------------------|--------|
| Real-time comment webhooks | ✅ Yes (Meta Graph API) | ❌ No public webhook |
| Keyword-triggered DM from comment | ✅ Yes (private reply API) | ❌ Not natively possible |
| Business-initiated DMs | ✅ Yes (within 24hr window) | ⚠️ Yes, but user must message first |
| Keyword-triggered DM from **user's DM** | ✅ Yes | ✅ Yes (TikTok Business Messaging API) |
| Comment polling (non-realtime) | N/A | ✅ Yes (get_comment_list API) |

**Bottom line**: TikTok does **not** offer real-time comment webhooks or a "private reply" API like Meta. The closest viable approach is:

1. **Polling strategy** — Periodically fetch new comments via TikTok's API and trigger DMs manually (with rate limit awareness)
2. **DM keyword trigger** — Instruct followers to DM a keyword (shift the CTA from "comment" to "DM me")
3. **Hybrid bridge** — Reply to comments publicly with a link to a Shopify product or a WA/DM invite

---

## 🗺️ Architecture Overview

### What TikTok Actually Allows (via Official APIs)

```
Option A: Comment Polling (Scheduled)
─────────────────────────────────────
[Cron Job / every 5 min]
  → TikTok API: GET /v2/video/comment/list/
  → Filter comments matching keyword
  → Reply to comment publicly (GET /v2/video/comment/reply/create/)
  → Send DM to user (requires user to have messaged first — 48hr window)
  → Create Shopify order on checkout

Option B: DM Keyword Trigger (Fully Official)
──────────────────────────────────────────────
[Merchant posts video: "DM me SHOP for product details"]
  → User sends DM with keyword "SHOP"
  → TikTok webhook fires → POST /api/tiktok/webhook
  → TikTokBotService.handle()
  → Full shopping session → Shopify order

Option C: Hybrid (Recommended)
───────────────────────────────
[Comment detected via polling]
  → Public reply: "✅ Check your DMs! Or DM us SHOP"
  → Manual DM if 48hr window is open (user messaged recently)
  → Product link in public reply as fallback
```

---

## 🔑 TikTok Developer Platform Requirements

### Account & App Setup

1. **TikTok Business Account** — required for Business API access
2. **TikTok Developer App** at [developers.tiktok.com](https://developers.tiktok.com)
3. **Products to apply for**:
   - `Video Data` (to read comments) — requires review
   - `Comment API` (to post replies) — requires review  
   - `Direct Message API` (beta access) — requires partnership approval
   - `Webhooks` (for DM events) — available after DM API approval
4. **OAuth 2.0** — merchants must connect their TikTok Business Account via OAuth

### API Endpoints Used

| Action | Endpoint | Notes |
|--------|----------|-------|
| List video comments | `GET /v2/video/comment/list/` | Requires `user.info.basic` + `video.comment.list` scope |
| Reply to comment | `POST /v2/video/comment/reply/create/` | Requires `video.comment.manage` scope |
| List DM conversations | `GET /v2/dm/conversation/list/` | Beta — DM API access required |
| Send DM | `POST /v2/dm/message/send/` | Only within 48hr window after user initiates |
| DM Webhook | `POST <your-webhook-url>` | Fires on incoming message events |
| OAuth flow | `GET /v2/oauth/token/` | Standard OAuth 2.0 |

---

## 🗄️ Phase 1 — Database Schema Changes

### 1.1 Add TikTok fields to `ShopifyMerchant`

```prisma
model ShopifyMerchant {
  // ... all existing fields ...

  // TikTok (new)
  tiktokConnected       Boolean  @default(false)
  tiktokAccessToken     String?
  tiktokRefreshToken    String?
  tiktokTokenExpiresAt  DateTime?
  tiktokOpenId          String?   // TikTok user's unique ID
  tiktokAccountName     String?   // Display name / @handle
  tiktokPollingEnabled  Boolean  @default(false)
  tiktokLastPolledAt    DateTime? // Tracks cursor for comment polling
}
```

### 1.2 New model: `TikTokCommentLog`

Mirrors `CommentDmLog` — prevents double-sending to the same commenter.

```prisma
model TikTokCommentLog {
  id          String   @id @default(cuid())
  merchantId  String
  videoId     String
  commenterId String
  commentId   String
  keyword     String
  repliedAt   DateTime @default(now())
  dmSent      Boolean  @default(false)

  @@unique([merchantId, commentId])
  @@index([merchantId, videoId])
}
```

### 1.3 Reuse `BotSession` for TikTok DM sessions

New session key prefix: `tt_<openId>_<merchantId>`

### Migration command

```bash
npx prisma migrate dev --name add_tiktok_fields
```

---

## 📦 Phase 2 — New Module: `src/modules/tiktok/`

### File structure

```
src/modules/tiktok/
├── tiktok.module.ts
├── tiktok-oauth.controller.ts    # OAuth connect/callback for merchants
├── tiktok-oauth.service.ts       # Token exchange, refresh, store
├── tiktok-api.service.ts         # Wrapper: list comments, reply, send DM
├── tiktok-bot.service.ts         # DM bot state machine (mirrors InstagramBotService)
├── tiktok-comment-poller.service.ts  # Scheduled cron: polls for new keyword comments
├── tiktok-webhook.controller.ts  # POST /api/tiktok/webhook (for DM events)
└── dto/
    ├── tiktok-webhook.dto.ts
    └── tiktok-connect.dto.ts
```

---

### 2.1 `tiktok-api.service.ts` — Core API wrapper

```typescript
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TikTokApiService {
  private readonly logger = new Logger(TikTokApiService.name);
  private readonly baseUrl = 'https://open.tiktokapis.com/v2';

  constructor(private readonly config: ConfigService) {}

  // ─── Comments ──────────────────────────────────────────────────────────────

  async listVideoComments(
    videoId: string,
    accessToken: string,
    cursor?: number,
  ): Promise<{ comments: any[]; nextCursor: number; hasMore: boolean }> {
    const res = await fetch(
      `${this.baseUrl}/video/comment/list/?fields=id,text,create_time,like_count,username&video_id=${videoId}${cursor ? `&cursor=${cursor}` : ''}`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    const data = await res.json();
    return {
      comments: data.data?.comments ?? [],
      nextCursor: data.data?.cursor ?? 0,
      hasMore: data.data?.has_more ?? false,
    };
  }

  async replyToComment(
    videoId: string,
    commentId: string,
    text: string,
    accessToken: string,
  ): Promise<boolean> {
    const res = await fetch(`${this.baseUrl}/video/comment/reply/create/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ video_id: videoId, parent_comment_id: commentId, text }),
    });
    return res.ok;
  }

  // ─── Direct Messages ───────────────────────────────────────────────────────

  async sendDm(
    receiverOpenId: string,
    message: string,
    accessToken: string,
  ): Promise<boolean> {
    // ⚠️ Only works within 48hr window after user initiates contact
    const res = await fetch(`${this.baseUrl}/dm/message/send/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        receiver_open_id: receiverOpenId,
        message_type: 'text',
        content: { text: message },
      }),
    });
    return res.ok;
  }

  // ─── Token Management ──────────────────────────────────────────────────────

  async refreshAccessToken(refreshToken: string): Promise<{
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }> {
    const clientKey = this.config.get<string>('TIKTOK_CLIENT_KEY');
    const clientSecret = this.config.get<string>('TIKTOK_CLIENT_SECRET');
    const res = await fetch(`${this.baseUrl}/oauth/token/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_key: clientKey,
        client_secret: clientSecret,
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    });
    const data = await res.json();
    return {
      accessToken: data.data?.access_token,
      refreshToken: data.data?.refresh_token,
      expiresIn: data.data?.expires_in,
    };
  }
}
```

---

### 2.2 `tiktok-comment-poller.service.ts` — Scheduled comment polling

Since TikTok has no comment webhook, we **poll on a schedule**. This is comparable to how many TikTok automation tools work (ManyChat, etc.).

```typescript
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TikTokCommentPollerService {
  private readonly logger = new Logger(TikTokCommentPollerService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly tiktokApi: TikTokApiService,
    private readonly botService: TikTokBotService,
    private readonly shopifyApi: ShopifyApiService,
  ) {}

  // Run every 5 minutes
  @Cron('*/5 * * * *')
  async pollAllMerchants() {
    const merchants = await this.prisma.shopifyMerchant.findMany({
      where: {
        tiktokConnected: true,
        tiktokPollingEnabled: true,
        isActive: true,
      },
    });

    for (const merchant of merchants) {
      await this.pollMerchant(merchant).catch((e) =>
        this.logger.error(`Poll failed for ${merchant.shop}: ${e.message}`),
      );
    }
  }

  private async pollMerchant(merchant: any) {
    // Refresh token if needed
    const accessToken = await this.ensureFreshToken(merchant);
    if (!accessToken) return;

    // Get active triggers for this merchant
    const triggers = await this.prisma.commentTrigger.findMany({
      where: { merchantId: merchant.id, isActive: true },
    });
    if (triggers.length === 0) return;

    // Get post-product mappings (TikTok platform)
    const mappings = await this.prisma.postProductMapping.findMany({
      where: { merchantId: merchant.id, platform: 'tiktok', isActive: true },
    });

    for (const mapping of mappings) {
      await this.pollVideoComments(merchant, accessToken, mapping, triggers);
    }

    // Update last polled timestamp
    await this.prisma.shopifyMerchant.update({
      where: { id: merchant.id },
      data: { tiktokLastPolledAt: new Date() },
    });
  }

  private async pollVideoComments(
    merchant: any,
    accessToken: string,
    mapping: any,
    triggers: any[],
  ) {
    const { comments } = await this.tiktokApi.listVideoComments(
      mapping.mediaId,
      accessToken,
    );

    const keywords = triggers.map((t) => t.keyword.toLowerCase());

    for (const comment of comments) {
      const commentText = (comment.text ?? '').toLowerCase();
      const matchedTrigger = triggers.find((t) =>
        commentText.includes(t.keyword.toLowerCase()),
      );

      if (!matchedTrigger) continue;

      // Anti-spam check
      const existing = await this.prisma.tiktokCommentLog.findUnique({
        where: { merchantId_commentId: { merchantId: merchant.id, commentId: comment.id } },
      });
      if (existing) continue;

      await this.handleMatchedComment(merchant, accessToken, mapping, comment, matchedTrigger);
    }
  }

  private async handleMatchedComment(
    merchant: any,
    accessToken: string,
    mapping: any,
    comment: any,
    trigger: any,
  ) {
    // 1. Fetch product from Shopify
    const product = await this.shopifyApi.getProduct(
      merchant.shop,
      mapping.shopifyProductId,
    );

    // 2. Public reply to comment
    const productUrl = product?.handle
      ? `https://${merchant.shop}/products/${product.handle}`
      : `https://${merchant.shop}`;

    const replyText = product
      ? `Hi @${comment.username}! Check out ${product.title} — ${productUrl} 🛍️ DM us "SHOP" to order on WhatsApp!`
      : `Hi @${comment.username}! Thanks for your interest! DM us for details 😊`;

    const replied = await this.tiktokApi.replyToComment(
      mapping.mediaId,
      comment.id,
      replyText,
      accessToken,
    );

    // 3. Attempt DM (only works if user recently messaged us)
    let dmSent = false;
    try {
      const dmBody = [
        `👋 Hi @${comment.username}! You commented on our post.`,
        ``,
        `🛍️ ${product?.title} — $${product?.price?.toFixed(2) ?? ''}`,
        ``,
        `Reply *SHOP* to browse and order, or visit:`,
        productUrl,
      ].join('\n');

      dmSent = await this.tiktokApi.sendDm(comment.open_id, dmBody, accessToken);
    } catch {
      // DM window may be closed — that's expected
      dmSent = false;
    }

    // 4. Log to prevent duplicate sends
    await this.prisma.tiktokCommentLog.create({
      data: {
        merchantId: merchant.id,
        videoId: mapping.mediaId,
        commenterId: comment.open_id ?? comment.id,
        commentId: comment.id,
        keyword: trigger.keyword,
        dmSent,
      },
    }).catch(() => {}); // ignore duplicates

    // 5. Update trigger count
    if (dmSent) {
      await this.prisma.commentTrigger.update({
        where: { id: trigger.id },
        data: { triggerCount: { increment: 1 } },
      });
    }

    this.logger.log(
      `TikTok: ${replied ? '✅ replied' : '❌ reply failed'} / DM: ${dmSent ? '✅ sent' : '⚠️ skipped (window closed)'} → @${comment.username}`,
    );
  }

  private async ensureFreshToken(merchant: any): Promise<string | null> {
    if (!merchant.tiktokAccessToken) return null;

    const expiry = merchant.tiktokTokenExpiresAt
      ? new Date(merchant.tiktokTokenExpiresAt)
      : null;
    const isExpired = expiry ? expiry < new Date() : false;

    if (!isExpired) return merchant.tiktokAccessToken;

    if (!merchant.tiktokRefreshToken) return null;

    try {
      const { accessToken, refreshToken, expiresIn } =
        await this.tiktokApi.refreshAccessToken(merchant.tiktokRefreshToken);
      const expiresAt = new Date(Date.now() + expiresIn * 1000);

      await this.prisma.shopifyMerchant.update({
        where: { id: merchant.id },
        data: {
          tiktokAccessToken: accessToken,
          tiktokRefreshToken: refreshToken,
          tiktokTokenExpiresAt: expiresAt,
        },
      });
      return accessToken;
    } catch (err) {
      this.logger.error(`Token refresh failed for ${merchant.shop}: ${err.message}`);
      return null;
    }
  }
}
```

---

### 2.3 `tiktok-webhook.controller.ts` — DM Webhook receiver

Handles incoming DM events when a user messages the merchant's TikTok account.

```typescript
@Controller('tiktok')
export class TikTokWebhookController {

  // TikTok sends GET for webhook verification
  @Get('webhook')
  verify(
    @Query('ts') ts: string,
    @Query('nonce') nonce: string,
    @Query('signature') signature: string,
  ) {
    // Validate: HMAC-SHA256(client_secret, ts + nonce)
    const expected = crypto
      .createHmac('sha256', this.config.get('TIKTOK_CLIENT_SECRET'))
      .update(ts + nonce)
      .digest('hex');

    if (expected !== signature) throw new UnauthorizedException();
    return { code: 0 };
  }

  // Receives DM events
  @Post('webhook')
  @HttpCode(200)
  async receiveWebhook(
    @Headers('x-tiktok-signature') signature: string,
    @Body() body: any,
  ) {
    // Validate signature
    // Parse event type: direct_message.received, etc.
    const event = body?.event;
    if (event === 'direct_message.received') {
      const { sender_open_id, message } = body.data;
      const text = message?.content?.text ?? '';
      
      // Find merchant by receiver open_id
      const merchant = await this.prisma.shopifyMerchant.findFirst({
        where: { tiktokOpenId: body.data.receiver_open_id },
      });
      if (!merchant) return { code: 0 };

      // Route to bot
      this.tiktokBot.handle(sender_open_id, merchant.id, text).catch(console.error);
    }
    return { code: 0 };
  }
}
```

---

### 2.4 `tiktok-bot.service.ts` — DM shopping bot

Mirrors `InstagramBotService` with identical state machine. Key differences:
- Session key: `tt_<openId>_<merchantId>`
- Messages sent via `TikTokApiService.sendDm()` (plain text only — no quick replies/buttons)
- Product images cannot be sent natively via DM API (text + URL only)
- Full shopping flow: categories → products → cart → checkout → Shopify order

---

### 2.5 `tiktok-oauth.controller.ts` — Merchant connection

```typescript
@Controller('tiktok/oauth')
export class TikTokOAuthController {
  
  @Get('connect')
  connect(@Query('merchantId') merchantId: string, @Res() res: Response) {
    const clientKey = this.config.get('TIKTOK_CLIENT_KEY');
    const redirectUri = `${this.config.get('API_BASE_URL')}/api/tiktok/oauth/callback`;
    const state = Buffer.from(JSON.stringify({ merchantId })).toString('base64');
    const scope = 'user.info.basic,video.comment.list,video.comment.manage,dm.conversation.management';
    
    const url = `https://www.tiktok.com/v2/auth/authorize/?client_key=${clientKey}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}&response_type=code&state=${state}`;
    return res.redirect(url);
  }

  @Get('callback')
  async callback(@Query('code') code: string, @Query('state') state: string) {
    // Exchange code for access_token + refresh_token
    // Store in ShopifyMerchant record
    // Redirect merchant back to settings
  }
}
```

---

## 🔗 Phase 3 — Extend `PostProductMapping` for TikTok

The existing `PostProductMapping` model already has a `platform` field (`String`). TikTok mappings use `platform: 'tiktok'` and `mediaId` = TikTok video ID.

**No schema change needed** — just populate `platform: 'tiktok'` when merchants map their videos.

Merchant workflow:
1. Merchant posts TikTok video about a product
2. In Shopbox settings, they paste the video URL or ID
3. They select the matching Shopify product
4. System saves `PostProductMapping { platform: 'tiktok', mediaId: '<videoId>', shopifyProductId: '...' }`
5. Poller monitors this video for matching comments

---

## 📲 Phase 4 — Full User Journey

### Journey A: Comment → Public Reply + Product Link (works today)
```
1. User comments "price" on merchant's TikTok video

2. Cron job fires every 5 min → detects keyword match

3. Bot replies publicly:
   "Hi @user! Check out Nike Air Max 90 — https://store.myshopify.com/products/nike-air
    DM us SHOP to order 💬"

4. User visits product page → completes checkout on Shopify storefront
   (No DM required — public reply with link achieves the sale)
```

### Journey B: Comment → DM (requires prior user contact)
```
1. User comments "price" → cron detects

2. Public reply sent (same as above)

3. If user previously messaged this TikTok account within 48hrs:
   → Direct DM sent: "Hi @user! Here's Nike Air Max — $89.99
      Reply SHOP to start shopping via DM 🛒"

4. User replies "SHOP" → TikTok DM webhook fires
                       → TikTokBotService starts session
                       → Full bot flow: categories → product → cart → checkout
                       → Shopify order created
```

### Journey C: DM-first (fully official, recommended for TikTok)
```
1. Merchant posts video: "DM me SHOP for product details and special pricing! 🛒"

2. User opens DMs and types "SHOP"

3. TikTok webhook fires → POST /api/tiktok/webhook
   → TikTokBotService.handle("SHOP", userOpenId, merchantId)
   → Welcome message + product categories
   → Full shopping session
   → Shopify order created
```

---

## ⚙️ Phase 5 — Environment Variables

```env
# TikTok
TIKTOK_CLIENT_KEY=your_client_key_here
TIKTOK_CLIENT_SECRET=your_client_secret_here
TIKTOK_REDIRECT_URI=https://shopbox-api.railway.app/api/tiktok/oauth/callback
TIKTOK_WEBHOOK_SECRET=your_webhook_secret_here
```

---

## 🛒 Phase 6 — Merchant Dashboard UI

| UI Element | Purpose |
|------------|---------|
| **Connect TikTok** button | Starts OAuth flow to connect merchant's TikTok Business account |
| **Enable comment polling** toggle | Activates the 5-min cron for this merchant |
| **Add Video Mapping** | Paste TikTok video URL → select Shopify product → save mapping |
| **Video Mappings list** | Shows all TikTok video → product mappings with status |
| **TikTok DM Bot** toggle | Enables the DM keyword-trigger bot |
| **Polling activity log** | Shows last X comments detected and actions taken |

---

## 🔐 Phase 7 — Security & Compliance

| Concern | Mitigation |
|---------|------------|
| Fake TikTok webhooks | HMAC-SHA256 validation on every incoming POST |
| Rate limiting | TikTok API rate limits: stay under 100 calls/min per merchant. Implement per-merchant rate limiter |
| Token expiry | `ensureFreshToken()` checks before every API call, auto-refreshes |
| TikTok ToS compliance | Use only official TikTok Open Platform APIs — no scraping, no unofficial bots |
| Data retention | Store only open_id (not personal data) in `TikTokCommentLog` |
| Duplicate prevents | `@@unique([merchantId, commentId])` on `TikTokCommentLog` |

---

## 📋 Complete Implementation Checklist

### Backend

- [ ] Add TikTok fields to `ShopifyMerchant` in `schema.prisma`
- [ ] Add `TikTokCommentLog` model to `schema.prisma`
- [ ] Run `npx prisma migrate dev --name add_tiktok_fields`
- [ ] Install `@nestjs/schedule` if not already: `pnpm add @nestjs/schedule`  
- [ ] Create `src/modules/tiktok/tiktok-api.service.ts`
- [ ] Create `src/modules/tiktok/tiktok-oauth.service.ts`
- [ ] Create `src/modules/tiktok/tiktok-oauth.controller.ts`
- [ ] Create `src/modules/tiktok/tiktok-comment-poller.service.ts`
- [ ] Create `src/modules/tiktok/tiktok-webhook.controller.ts`
- [ ] Create `src/modules/tiktok/tiktok-bot.service.ts`
- [ ] Create `src/modules/tiktok/tiktok.module.ts`
- [ ] Register `TikTokModule` + `ScheduleModule` in `AppModule`
- [ ] Add env vars to `.env.example`, Railway, local `.env`

### TikTok Developer Portal

- [ ] Create TikTok app at [developers.tiktok.com](https://developers.tiktok.com)
- [ ] Apply for `Video Data`, `Comment API`, and `Direct Message API` products
- [ ] Configure OAuth redirect URI
- [ ] Configure webhook callback URL: `https://shopbox-api.railway.app/api/tiktok/webhook`
- [ ] Subscribe to `direct_message.received` webhook event

### Frontend (Shopify App)

- [ ] "Connect TikTok" OAuth button in merchant settings
- [ ] Enable/disable polling toggle
- [ ] Video → Product mapping UI (add video URL + select product)
- [ ] TikTok activity log section

### Testing

- [ ] Test OAuth connect flow with a TikTok Business account
- [ ] Test comment polling: post a video, leave a keyword comment, verify cron picks it up within 5 min
- [ ] Test public reply gets posted correctly
- [ ] Test DM webhook receives message → bot session starts
- [ ] Test full DM bot flow: SHOP → categories → product → cart → checkout → Shopify order
- [ ] Test anti-spam: second comment on same video does not re-trigger

---

## ⏳ Estimated Timeline

| Phase | Effort |
|-------|--------|
| Phase 1 — DB schema | ~30 min |
| Phase 2a — TikTok API service | ~2 hrs |
| Phase 2b — OAuth controller/service | ~1.5 hrs |
| Phase 2c — Comment poller (cron) | ~2 hrs |
| Phase 2d — Webhook controller | ~1 hr |
| Phase 2e — DM bot state machine | ~3 hrs |
| Phase 2f — Module wiring | ~30 min |
| Phase 5 — Env vars | ~15 min |
| Phase 6 — Frontend UI | ~2–3 hrs |
| TikTok API approval process | ⚠️ **1–4 weeks** (out of scope) |
| Testing & tweaks | ~2 hrs |
| **Total (code only)** | **~14–16 hrs** |

---

## 🔑 Key Decisions Needed Before Starting

> [!IMPORTANT]
> Confirm these before implementation:

1. **Polling vs. webhook priority**: Implement polling first (works sooner, no DM API approval needed) or invest time in full DM webhook integration?  
   → **Recommendation**: Start with polling + public reply (Phase A). Add DM bot (Phase B/C) once TikTok approves DM API access.

2. **TikTok Developer App**: Have you applied for or do you have access to TikTok's `Comment API` and `Direct Message API`? The review process takes 1–4 weeks.

3. **Polling interval**: Every 5 minutes is a safe default. More frequent polling risks rate limits. Confirm acceptable latency for comment responses.

4. **`@nestjs/schedule` already installed?**: Check `package.json`. If not, the cron poller requires it.

5. **DM-first strategy**: Given TikTok's limitations, consider shifting the user CTA in merchant's video posts from *"comment SHOP"* to *"DM us SHOP"* — this unlocks the full bot flow without API approval hurdles.

---

## 📊 Comparison: Instagram vs TikTok Integration

| Aspect | Instagram (existing) | TikTok (planned) |
|--------|---------------------|-----------------|
| Comment detection | Real-time webhook | Polling every 5 min |
| Private DM from comment | ✅ Private Reply API | ❌ Not possible natively |
| Keyword → DM trigger | ✅ Automatic | ⚠️ Only if 48hr window open |
| DM bot (full shopping) | ✅ Quick replies, buttons | Text-only (no interactive UI) |
| API complexity | Medium | High (stricter approval) |
| Estimated detection lag | < 1 second | 0–5 minutes |
| Product images in DM | ✅ Yes | ❌ Text + URL only |
