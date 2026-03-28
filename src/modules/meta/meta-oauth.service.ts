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

    return `https://www.facebook.com/v21.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${shop}`;

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

    return `https://www.facebook.com/v21.0/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${shop}`;

  }

  async exchangeCodeForToken(
    code: string,
    redirectUriSuffix: string,
  ): Promise<string> {
    const clientId = this.config.get<string>('META_APP_ID');
    const clientSecret = this.config.get<string>('META_APP_SECRET');
    const appUrl = this.config.get<string>('APP_URL');
    const redirectUri = `${appUrl}/api/meta/auth/${redirectUriSuffix}/callback`;

    const url = `https://graph.facebook.com/v21.0/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}&code=${code}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new BadRequestException(
        `Meta OAuth error: ${data.error?.message || 'Unknown error'}`,
      );
    }

    return data.access_token;
  }

  async getPages(userToken: string) {
    const bizUrl = `https://graph.facebook.com/v21.0/me/businesses?access_token=${userToken}`;
    const bizRes = await fetch(bizUrl);
    const bizData = await bizRes.json();

    // 3. Try standard me/accounts (Personal pages)
    const url = `https://graph.facebook.com/v21.0/me/accounts?fields=id,name,access_token,category,instagram_business_account{id,username}&access_token=${userToken}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      this.logger.error(
        `Error fetching standard pages: ${JSON.stringify(data, null, 2)}`,
      );
    }

    const allPages = data.data || [];

    // 4. Try Business Manager owned pages if standard list is empty
    if (bizData.data?.length > 0) {
      for (const biz of bizData.data) {
        const pagesUrl = `https://graph.facebook.com/v21.0/${biz.id}/owned_pages?fields=id,name,access_token,category,instagram_business_account{id,username}&access_token=${userToken}`;
        const pagesRes = await fetch(pagesUrl);
        const pagesData = await pagesRes.json();
        if (pagesData.data?.length > 0) {
          allPages.push(...pagesData.data);
        }
      }
    }

    // Deduplicate pages by ID
    const uniquePages = Array.from(
      new Map(allPages.map((p) => [p.id, p])).values(),
    );

    return uniquePages as {
      id: string;
      name: string;
      access_token: string;
      category: string;
      instagram_business_account?: { id: string; username: string };
    }[];
  }

  async getInstagramAccount(pageId: string, pageToken: string) {
    const url = `https://graph.facebook.com/v21.0/${pageId}?fields=instagram_business_account{id,username}&access_token=${pageToken}`;
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
    const url = `https://graph.facebook.com/v21.0/${pageId}/subscribed_apps?access_token=${pageToken}`;
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
      throw new BadRequestException(
        `Meta subscription error: ${data.error?.message || 'Unknown error'}`,
      );
    }

    return true;
  }

  async connectMessenger(shop: string, code: string) {
    let userToken: string;
    try {
      userToken = await this.exchangeCodeForToken(code, 'messenger');
    } catch (error) {
      if (
        error instanceof BadRequestException &&
        error.message.includes('authorization code has been used')
      ) {
        const merchant = await this.shopifyRepository.findByShop(shop);
        if (merchant?.messengerConnected && merchant.messengerPageName) {
          this.logger.warn(
            `[Messenger] Duplicate callback for ${shop} — already connected, ignoring stale code`,
          );
          return { connected: true, pageName: merchant.messengerPageName };
        }
      }
      throw error;
    }
    const pages = await this.getPages(userToken);

    if (pages.length === 0) {
      throw new BadRequestException('No Facebook pages found for this user');
    }

    // Auto-select the first page
    const page = pages[0];
    this.logger.log(
      `[Messenger] Auto-selecting page: ${page.name} (${page.id})`,
    );
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
    let userToken: string;
    try {
      userToken = await this.exchangeCodeForToken(code, 'instagram');
    } catch (error) {
      // If the code was already used (e.g. infrastructure retry hit a second instance),
      // check if the first request already connected Instagram successfully.
      if (
        error instanceof BadRequestException &&
        error.message.includes('authorization code has been used')
      ) {
        const merchant = await this.shopifyRepository.findByShop(shop);
        if (merchant?.instagramConnected && merchant.instagramUsername) {
          this.logger.warn(
            `[Instagram] Duplicate callback for ${shop} — already connected, ignoring stale code`,
          );
          return { connected: true, username: merchant.instagramUsername };
        }
      }
      throw error;
    }
    const pages = await this.getPages(userToken);

    let instagramAccount = null;
    let selectedPage = null;

    if (pages.length === 0) {
      // Direct IG lookup fallback
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
      throw new BadRequestException(
        'No Instagram Business accounts found connected to your Facebook pages. Please ensure your Instagram is a BUSINESS account and linked to a FB Page.',
      );
    }

    // Subscribe to webhooks
    await this.subscribePageToWebhook(
      selectedPage.id,
      selectedPage.access_token,
    );
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

  async getFacebookPosts(shop: string) {
    const merchant = await this.shopifyRepository.findByShop(shop);
    if (!merchant || !merchant.messengerToken || !merchant.messengerPageId) {
      throw new BadRequestException('Messenger not connected for this shop');
    }

    const url = `https://graph.facebook.com/v20.0/${merchant.messengerPageId}/posts?fields=id,message,permalink_url,full_picture,created_time,status_type&limit=15&access_token=${merchant.messengerToken}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new BadRequestException(
        `Meta API error: ${data.error?.message || 'Unknown error'}`,
      );
    }

    return (data.data || []).map((post: any) => ({
      id: post.id,
      text: post.message || '[No text]',
      url: post.permalink_url,
      imageUrl: post.full_picture || null,
      createdAt: post.created_time,
      type: post.status_type,
    }));
  }

  async getInstagramPosts(shop: string) {
    const merchant = await this.shopifyRepository.findByShop(shop);
    if (!merchant || !merchant.instagramToken || !merchant.instagramAccountId) {
      throw new BadRequestException('Instagram not connected for this shop');
    }

    const url = `https://graph.facebook.com/v21.0/${merchant.instagramAccountId}/media?fields=id,caption,permalink,media_url,timestamp,media_type&limit=15&access_token=${merchant.instagramToken}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new BadRequestException(
        `Meta API error: ${data.error?.message || 'Unknown error'}`,
      );
    }

    return (data.data || []).map((post: any) => ({
      id: post.id,
      text: post.caption || '[No caption]',
      url: post.permalink,
      imageUrl: post.media_url,
      createdAt: post.timestamp,
      type: post.media_type,
    }));
  }
}
