import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ShopifyRepository } from '../shopify/shopify.repository';

@Injectable()
export class MetaOauthService {
  private readonly logger = new Logger(MetaOauthService.name);

  constructor(
    private readonly config: ConfigService,
    private readonly shopifyRepository: ShopifyRepository,
  ) {}

  getMessengerAuthUrl(shop: string): string {
    const clientId = this.config.get<string>('META_APP_ID');
    const appUrl = this.config.get<string>('APP_URL');
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

  getInstagramAuthUrl(shop: string): string {
    const clientId = this.config.get<string>('META_APP_ID');
    const appUrl = this.config.get<string>('APP_URL');
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

    return `https://www.facebook.com/v20.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${shop}`;
  }

  async exchangeCodeForToken(code: string, redirectUriSuffix: string): Promise<string> {
    const clientId = this.config.get<string>('META_APP_ID');
    const clientSecret = this.config.get<string>('META_APP_SECRET');
    const appUrl = this.config.get<string>('APP_URL');
    const redirectUri = `${appUrl}/api/meta/auth/${redirectUriSuffix}/callback`;

    const url = `https://graph.facebook.com/v20.0/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${code}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new BadRequestException(`Meta OAuth error: ${data.error?.message || 'Unknown error'}`);
    }

    return data.access_token;
  }

  async getPages(userToken: string) {
    // 1. Audit permissions first
    const permUrl = `https://graph.facebook.com/v20.0/me/permissions?access_token=${userToken}`;
    const permRes = await fetch(permUrl);
    const permData = await permRes.json();
    console.log('[DEBUG] Current Token Permissions:', JSON.stringify(permData, null, 2));

    // 2. Fetch User's Businesses (Fallback for Business Suite)
    const bizUrl = `https://graph.facebook.com/v20.0/me/businesses?access_token=${userToken}`;
    const bizRes = await fetch(bizUrl);
    const bizData = await bizRes.json();
    console.log('[DEBUG] User Businesses:', JSON.stringify(bizData, null, 2));

    // 3. Try standard me/accounts (Personal pages)
    const url = `https://graph.facebook.com/v20.0/me/accounts?fields=id,name,access_token,category,instagram_business_account{id,username}&access_token=${userToken}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log('[DEBUG] Standard me/accounts (v20):', JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.error('[DEBUG] Error fetching standard pages:', JSON.stringify(data, null, 2));
    }

    const allPages = data.data || [];

    // 4. Try Business Manager owned pages if standard list is empty
    if (bizData.data?.length > 0) {
      console.log(`[DEBUG] Found ${bizData.data.length} businesses. Checking for owned pages...`);
      for (const biz of bizData.data) {
        const pagesUrl = `https://graph.facebook.com/v20.0/${biz.id}/owned_pages?fields=id,name,access_token,category,instagram_business_account{id,username}&access_token=${userToken}`;
        const pagesRes = await fetch(pagesUrl);
        const pagesData = await pagesRes.json();
        console.log(`[DEBUG] Pages for business ${biz.name}:`, JSON.stringify(pagesData, null, 2));
        if (pagesData.data?.length > 0) {
          allPages.push(...pagesData.data);
        }
      }
    }

    // Deduplicate pages by ID (same page can appear from me/accounts and business owned pages)
    const uniquePages = Array.from(
      new Map(allPages.map((p) => [p.id, p])).values(),
    );
    console.log(`[DEBUG] Total unique pages after dedup: ${uniquePages.length}`);

    return uniquePages as { id: string; name: string; access_token: string; category: string; instagram_business_account?: { id: string, username: string } }[];
  }




  async getInstagramAccount(pageId: string, pageToken: string) {
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

  async subscribePageToWebhook(pageId: string, pageToken: string) {
    const url = `https://graph.facebook.com/v18.0/${pageId}/subscribed_apps?access_token=${pageToken}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subscribed_fields: ['messages', 'messaging_postbacks', 'messaging_optins', 'feed'],
      }),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new BadRequestException(`Meta subscription error: ${data.error?.message || 'Unknown error'}`);
    }

    return true;
  }

  async connectMessenger(shop: string, code: string) {
    const userToken = await this.exchangeCodeForToken(code, 'messenger');
    const pages = await this.getPages(userToken);

    if (pages.length === 0) {
      throw new BadRequestException('No Facebook pages found for this user');
    }

    // Auto-select the first page
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

  async connectInstagram(shop: string, code: string) {
    console.log('[DEBUG] Token exchange successful for connectInstagram');
    const userToken = await this.exchangeCodeForToken(code, 'instagram');
    const pages = await this.getPages(userToken);
    console.log(`[DEBUG] Found ${pages.length} potential Facebook pages.`);

    let instagramAccount = null;
    let selectedPage = null;

    if (pages.length === 0) {
      // Direct IG lookup fallback
      console.log('[DEBUG] No pages found via me/accounts. Trying direct lookup...');
      const igUrl = `https://graph.facebook.com/v20.0/me/instagram_accounts?fields=id,username&access_token=${userToken}`;
      const igRes = await fetch(igUrl);
      const igData = await igRes.json();
      console.log('[DEBUG] Direct User IG lookup response:', JSON.stringify(igData, null, 2));
    }

    for (const page of pages) {
      console.log(`[DEBUG] Checking Page: ${page.name} (${page.id})`);
      const igAccount = page.instagram_business_account;
      
      if (igAccount) {
        console.log(`[DEBUG] SUCCESS! Found linked Instagram account: ${igAccount.username} (${igAccount.id})`);
        instagramAccount = igAccount;
        selectedPage = page;
        break;
      } else {
        console.log(`[DEBUG] Page "${page.name}" has no linked business Instagram account.`);
      }
    }

    if (!instagramAccount || !selectedPage) {
      console.error('[DEBUG] Failed to find any linked Instagram Business accounts. Logic end.');
      throw new BadRequestException('No Instagram Business accounts found connected to your Facebook pages. Please ensure your Instagram is a BUSINESS account and linked to a FB Page.');
    }

    // Subscribe to webhooks
    await this.subscribePageToWebhook(selectedPage.id, selectedPage.access_token);
    await this.shopifyRepository.updateChannels(shop, {
      instagramConnected: true,
      instagramToken: selectedPage.access_token,
      instagramAccountId: instagramAccount.id,
      instagramUsername: instagramAccount.username,
    });
    return { connected: true, username: instagramAccount.username };
  }


  async disconnectMessenger(shop: string) {
    return this.shopifyRepository.updateChannels(shop, {
      messengerConnected: false,
      messengerToken: null,
      messengerPageId: null,
    });
  }

  async disconnectInstagram(shop: string) {
    return this.shopifyRepository.updateChannels(shop, {
      instagramConnected: false,
      instagramToken: null,
      instagramAccountId: null,
    });
  }
}
