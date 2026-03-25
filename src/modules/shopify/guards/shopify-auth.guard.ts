import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { ShopifyRepository } from '../shopify.repository';

@Injectable()
export class ShopifyAuthGuard implements CanActivate {
  private readonly logger = new Logger(ShopifyAuthGuard.name);

  constructor(
    private readonly config: ConfigService,
    private readonly repository: ShopifyRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      this.logger.debug('Missing or invalid Authorization header');
      throw new UnauthorizedException(
        'Missing or invalid authorization header',
      );
    }

    const token = authHeader.split(' ')[1];
    const apiSecret = this.config.get<string>('SHOPIFY_API_SECRET');
    const apiKey = this.config.get<string>('SHOPIFY_API_KEY');

    this.logger.debug(
      `Verifying token... Secret starts with: ${apiSecret?.substring(0, 5)}... API Key: ${apiKey?.substring(0, 5)}...`,
    );

    try {
      // Shopify session tokens are signed with the API Secret
      // aud MUST equal your API key
      const decoded = jwt.verify(token, apiSecret, {
        algorithms: ['HS256'],
        audience: apiKey,
      }) as any;

      // dest contains the shop domain (e.g. https://shop.myshopify.com)
      const shop = decoded.dest
        ? new URL(decoded.dest).hostname
        : decoded.shop || decoded.aud;

      if (!shop) {
        throw new UnauthorizedException('Invalid token payload: missing shop');
      }

      const merchant = await this.repository.findByShop(shop);
      if (!merchant) {
        throw new UnauthorizedException(`Merchant not found for shop: ${shop}`);
      }
      if (!merchant.isActive) {
        throw new UnauthorizedException(
          `Merchant ${shop} is currently inactive`,
        );
      }

      request.merchant = merchant;
      request.shop = shop; // For backward compatibility with your snippet
      return true;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Shopify session token has expired');
      }
      if (
        error.name === 'JsonWebTokenError' &&
        error.message.includes('audience')
      ) {
        throw new UnauthorizedException(
          `Invalid audience: Ensure "aud" in your payload matches your SHOPIFY_API_KEY`,
        );
      }
      throw new UnauthorizedException(
        `Invalid Shopify session token: ${error.message}`,
      );
    }
  }
}
