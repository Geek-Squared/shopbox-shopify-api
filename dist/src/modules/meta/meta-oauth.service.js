"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MetaOauthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaOauthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const shopify_repository_1 = require("../shopify/shopify.repository");
let MetaOauthService = MetaOauthService_1 = class MetaOauthService {
    constructor(config, shopifyRepository) {
        this.config = config;
        this.shopifyRepository = shopifyRepository;
        this.logger = new common_1.Logger(MetaOauthService_1.name);
    }
    getMessengerAuthUrl(shop) {
        const clientId = this.config.get('META_APP_ID');
        const appUrl = this.config.get('APP_URL');
        const redirectUri = `${appUrl}/api/meta/auth/messenger/callback`;
        const scope = [
            'pages_messaging',
            'pages_read_engagement',
            'pages_read_user_content',
            'pages_manage_engagement',
            'pages_manage_metadata',
            'pages_show_list',
        ].join(',');
        return `https://www.facebook.com/v18.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${shop}`;
    }
    getInstagramAuthUrl(shop) {
        const clientId = this.config.get('META_APP_ID');
        const appUrl = this.config.get('APP_URL');
        const redirectUri = `${appUrl}/api/meta/auth/instagram/callback`;
        const scope = [
            'instagram_manage_messages',
            'instagram_manage_comments',
            'instagram_basic',
            'pages_messaging',
            'pages_read_engagement',
            'pages_manage_metadata',
            'pages_show_list',
            'business_management',
        ].join(',');
        return `https://www.facebook.com/v18.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${shop}`;
    }
    async exchangeCodeForToken(code, redirectUriSuffix) {
        const clientId = this.config.get('META_APP_ID');
        const clientSecret = this.config.get('META_APP_SECRET');
        const appUrl = this.config.get('APP_URL');
        const redirectUri = `${appUrl}/api/meta/auth/${redirectUriSuffix}/callback`;
        const url = `https://graph.facebook.com/v20.0/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${code}`;
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            throw new common_1.BadRequestException(`Meta OAuth error: ${data.error?.message || 'Unknown error'}`);
        }
        return data.access_token;
    }
    async getPages(userToken) {
        const bizUrl = `https://graph.facebook.com/v20.0/me/businesses?access_token=${userToken}`;
        const bizRes = await fetch(bizUrl);
        const bizData = await bizRes.json();
        const url = `https://graph.facebook.com/v20.0/me/accounts?fields=id,name,access_token,category,instagram_business_account{id,username}&access_token=${userToken}`;
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            this.logger.error(`Error fetching standard pages: ${JSON.stringify(data, null, 2)}`);
        }
        const allPages = data.data || [];
        if (bizData.data?.length > 0) {
            for (const biz of bizData.data) {
                const pagesUrl = `https://graph.facebook.com/v20.0/${biz.id}/owned_pages?fields=id,name,access_token,category,instagram_business_account{id,username}&access_token=${userToken}`;
                const pagesRes = await fetch(pagesUrl);
                const pagesData = await pagesRes.json();
                if (pagesData.data?.length > 0) {
                    allPages.push(...pagesData.data);
                }
            }
        }
        const uniquePages = Array.from(new Map(allPages.map((p) => [p.id, p])).values());
        return uniquePages;
    }
    async getInstagramAccount(pageId, pageToken) {
        const url = `https://graph.facebook.com/v18.0/${pageId}?fields=instagram_business_account{id,username}&access_token=${pageToken}`;
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok || !data.instagram_business_account) {
            return null;
        }
        return {
            id: data.instagram_business_account.id,
            username: data.instagram_business_account.username,
        };
    }
    async subscribePageToWebhook(pageId, pageToken) {
        const url = `https://graph.facebook.com/v18.0/${pageId}/subscribed_apps?access_token=${pageToken}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                subscribed_fields: [
                    'messages',
                    'messaging_postbacks',
                    'messaging_optins',
                    'feed',
                ],
            }),
        });
        if (!response.ok) {
            const data = await response.json();
            throw new common_1.BadRequestException(`Meta subscription error: ${data.error?.message || 'Unknown error'}`);
        }
        return true;
    }
    async connectMessenger(shop, code) {
        const userToken = await this.exchangeCodeForToken(code, 'messenger');
        const pages = await this.getPages(userToken);
        if (pages.length === 0) {
            throw new common_1.BadRequestException('No Facebook pages found for this user');
        }
        const page = pages[0];
        this.logger.log(`[Messenger] Auto-selecting page: ${page.name} (${page.id})`);
        await this.subscribePageToWebhook(page.id, page.access_token);
        await this.shopifyRepository.updateChannels(shop, {
            messengerConnected: true,
            messengerToken: page.access_token,
            messengerPageId: page.id,
            messengerPageName: page.name,
        });
        return { connected: true, pageName: page.name };
    }
    async connectInstagram(shop, code) {
        const userToken = await this.exchangeCodeForToken(code, 'instagram');
        const pages = await this.getPages(userToken);
        let instagramAccount = null;
        let selectedPage = null;
        if (pages.length === 0) {
            const igUrl = `https://graph.facebook.com/v20.0/me/instagram_accounts?fields=id,username&access_token=${userToken}`;
            await fetch(igUrl);
        }
        for (const page of pages) {
            const igAccount = page.instagram_business_account;
            if (igAccount) {
                instagramAccount = igAccount;
                selectedPage = page;
                break;
            }
        }
        if (!instagramAccount || !selectedPage) {
            throw new common_1.BadRequestException('No Instagram Business accounts found connected to your Facebook pages. Please ensure your Instagram is a BUSINESS account and linked to a FB Page.');
        }
        await this.subscribePageToWebhook(selectedPage.id, selectedPage.access_token);
        await this.shopifyRepository.updateChannels(shop, {
            instagramConnected: true,
            instagramToken: selectedPage.access_token,
            instagramAccountId: instagramAccount.id,
            instagramUsername: instagramAccount.username,
        });
        return { connected: true, username: instagramAccount.username };
    }
    async disconnectMessenger(shop) {
        return this.shopifyRepository.updateChannels(shop, {
            messengerConnected: false,
            messengerToken: null,
            messengerPageId: null,
        });
    }
    async disconnectInstagram(shop) {
        return this.shopifyRepository.updateChannels(shop, {
            instagramConnected: false,
            instagramToken: null,
            instagramAccountId: null,
        });
    }
    async getFacebookPosts(shop) {
        const merchant = await this.shopifyRepository.findByShop(shop);
        if (!merchant || !merchant.messengerToken || !merchant.messengerPageId) {
            throw new common_1.BadRequestException('Messenger not connected for this shop');
        }
        const url = `https://graph.facebook.com/v20.0/${merchant.messengerPageId}/posts?fields=id,message,permalink_url,full_picture,created_time,status_type&limit=15&access_token=${merchant.messengerToken}`;
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            throw new common_1.BadRequestException(`Meta API error: ${data.error?.message || 'Unknown error'}`);
        }
        return (data.data || []).map((post) => ({
            id: post.id,
            text: post.message || '[No text]',
            url: post.permalink_url,
            imageUrl: post.full_picture || null,
            createdAt: post.created_time,
            type: post.status_type,
        }));
    }
    async getInstagramPosts(shop) {
        const merchant = await this.shopifyRepository.findByShop(shop);
        if (!merchant || !merchant.instagramToken || !merchant.instagramAccountId) {
            throw new common_1.BadRequestException('Instagram not connected for this shop');
        }
        const url = `https://graph.facebook.com/v20.0/${merchant.instagramAccountId}/media?fields=id,caption,permalink,media_url,timestamp,media_type&limit=15&access_token=${merchant.instagramToken}`;
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            throw new common_1.BadRequestException(`Meta API error: ${data.error?.message || 'Unknown error'}`);
        }
        return (data.data || []).map((post) => ({
            id: post.id,
            text: post.caption || '[No caption]',
            url: post.permalink,
            imageUrl: post.media_url,
            createdAt: post.timestamp,
            type: post.media_type,
        }));
    }
};
exports.MetaOauthService = MetaOauthService;
exports.MetaOauthService = MetaOauthService = MetaOauthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        shopify_repository_1.ShopifyRepository])
], MetaOauthService);
//# sourceMappingURL=meta-oauth.service.js.map