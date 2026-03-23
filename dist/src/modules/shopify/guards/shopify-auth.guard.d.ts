import { CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ShopifyRepository } from '../shopify.repository';
export declare class ShopifyAuthGuard implements CanActivate {
    private readonly config;
    private readonly repository;
    private readonly logger;
    constructor(config: ConfigService, repository: ShopifyRepository);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
