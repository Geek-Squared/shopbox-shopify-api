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
var PostMappingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMappingService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const shopify_api_service_1 = require("../shopify/shopify-api.service");
const shopify_repository_1 = require("../shopify/shopify.repository");
let PostMappingService = PostMappingService_1 = class PostMappingService {
    constructor(prisma, shopifyApi, shopifyRepo) {
        this.prisma = prisma;
        this.shopifyApi = shopifyApi;
        this.shopifyRepo = shopifyRepo;
        this.logger = new common_1.Logger(PostMappingService_1.name);
    }
    normalizeFacebookUrl(postUrl) {
        const url = new URL(postUrl);
        url.hash = '';
        if (url.hostname === 'm.facebook.com') {
            url.hostname = 'www.facebook.com';
        }
        const normalized = `${url.origin}${url.pathname}${url.search}`;
        return normalized.endsWith('/') && !url.search
            ? normalized.slice(0, -1)
            : normalized;
    }
    extractFacebookPostId(postUrl, messengerPageId) {
        try {
            const normalizedUrl = this.normalizeFacebookUrl(postUrl);
            const url = new URL(normalizedUrl);
            const storyFbid = url.searchParams.get('story_fbid');
            const fbidParam = url.searchParams.get('fbid');
            const numericId = [storyFbid, fbidParam].find((value) => /^\d+$/.test(value ?? ''));
            if (numericId) {
                return `${messengerPageId}_${numericId}`;
            }
            const postsMatch = normalizedUrl.match(/\/posts\/(\d+)/);
            if (postsMatch) {
                return `${messengerPageId}_${postsMatch[1]}`;
            }
            const pfbidMatch = normalizedUrl.match(/pfbid([a-zA-Z0-9]+)/);
            if (pfbidMatch) {
                return `url:${normalizedUrl}`;
            }
            throw new Error('Could not extract post ID from URL');
        }
        catch (e) {
            if (e.message.includes('Invalid URL')) {
                if (/^\d+_\d+$/.test(postUrl)) {
                    return postUrl;
                }
                if (/^\d+$/.test(postUrl)) {
                    return `${messengerPageId}_${postUrl}`;
                }
            }
            throw new common_1.ConflictException(`Could not extract Facebook post ID: ${e.message}`);
        }
    }
    async createMapping(merchantId, data) {
        const merchant = await this.shopifyRepo.findById(merchantId);
        if (!merchant)
            throw new common_1.NotFoundException('Merchant not found');
        let mediaId;
        let normalizedPostUrl = data.postUrl;
        if (data.platform === 'facebook') {
            if (!merchant.messengerPageId) {
                throw new common_1.ConflictException('Facebook Messenger is not connected. Connect it first.');
            }
            normalizedPostUrl = this.normalizeFacebookUrl(data.postUrl);
            mediaId = this.extractFacebookPostId(normalizedPostUrl, merchant.messengerPageId);
        }
        else {
            mediaId = data.postUrl;
        }
        let productTitle = 'Unknown Product';
        try {
            const product = await this.shopifyApi.getProduct(merchant.shop, data.shopifyProductId);
            productTitle = product?.title || 'Unknown Product';
        }
        catch (e) {
            this.logger.warn(`Could not fetch product title: ${e.message}`);
        }
        const mapping = await this.prisma.postProductMapping.upsert({
            where: {
                merchantId_mediaId: { merchantId, mediaId },
            },
            create: {
                merchantId,
                platform: data.platform,
                postUrl: normalizedPostUrl,
                mediaId,
                shopifyProductId: data.shopifyProductId,
                productTitle,
            },
            update: {
                shopifyProductId: data.shopifyProductId,
                productTitle,
                postUrl: normalizedPostUrl,
                isActive: true,
            },
        });
        this.logger.log(`✅ Mapped post ${mediaId} → product "${productTitle}" (${data.shopifyProductId})`);
        return mapping;
    }
    async listMappings(merchantId) {
        return this.prisma.postProductMapping.findMany({
            where: { merchantId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async updateMapping(merchantId, mappingId, data) {
        return this.prisma.postProductMapping.update({
            where: { id: mappingId, merchantId },
            data,
        });
    }
    async deleteMapping(merchantId, mappingId) {
        return this.prisma.postProductMapping.delete({
            where: { id: mappingId, merchantId },
        });
    }
    async findByMediaId(merchantId, mediaId) {
        return this.prisma.postProductMapping.findUnique({
            where: {
                merchantId_mediaId: { merchantId, mediaId },
            },
        });
    }
};
exports.PostMappingService = PostMappingService;
exports.PostMappingService = PostMappingService = PostMappingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        shopify_api_service_1.ShopifyApiService,
        shopify_repository_1.ShopifyRepository])
], PostMappingService);
//# sourceMappingURL=post-mapping.service.js.map