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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const store_repository_1 = require("../store/store.repository");
const sellers_repository_1 = require("../sellers/sellers.repository");
const products_repository_1 = require("./products.repository");
const PLAN_PRODUCT_LIMITS = {
    FREE: 10,
    BASIC: Infinity,
    PRO: Infinity,
};
let ProductsService = class ProductsService {
    constructor(productsRepository, storeRepository, sellerRepository) {
        this.productsRepository = productsRepository;
        this.storeRepository = storeRepository;
        this.sellerRepository = sellerRepository;
    }
    findAll(sellerId) {
        return this.productsRepository.listBySeller(sellerId);
    }
    listPublicByStore(storeId) {
        return this.productsRepository.listActiveByStore(storeId);
    }
    listForBot(storeId) {
        return this.productsRepository.listActiveByStoreGrouped(storeId);
    }
    async findOne(id, sellerId) {
        const product = await this.productsRepository.findByIdForSeller(id, sellerId);
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        return product;
    }
    async findPublicById(id) {
        const product = await this.productsRepository.findPublicById(id);
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        return product;
    }
    async create(sellerId, payload) {
        const store = await this.storeRepository.findBySellerId(sellerId);
        if (!store) {
            throw new common_1.NotFoundException('Store not found. Please create a store first.');
        }
        await this.enforcePlanLimit(sellerId);
        return this.productsRepository.create({
            sellerId,
            storeId: store.id,
            name: payload.name,
            description: payload.description,
            price: payload.price,
            currency: payload.currency ?? 'USD',
            stockQty: payload.stockQty ?? 0,
            images: payload.images,
        });
    }
    async update(id, sellerId, payload) {
        const result = await this.productsRepository.update(id, sellerId, payload);
        if (result.count === 0) {
            throw new common_1.NotFoundException('Product not found');
        }
        return this.findOne(id, sellerId);
    }
    async updateStock(id, sellerId, quantity) {
        const result = await this.productsRepository.setStock(id, sellerId, quantity);
        if (result.count === 0) {
            throw new common_1.NotFoundException('Product not found');
        }
        return this.findOne(id, sellerId);
    }
    async getLowStock(sellerId) {
        return this.productsRepository.findLowStock(sellerId);
    }
    async getOutOfStock(sellerId) {
        return this.productsRepository.findOutOfStock(sellerId);
    }
    async toggleActive(id, sellerId, active) {
        const result = await this.productsRepository.toggleActive(id, sellerId, active);
        if (result.count === 0) {
            throw new common_1.NotFoundException('Product not found');
        }
        return this.findOne(id, sellerId);
    }
    async addImage(productId, sellerId, data) {
        await this.findOne(productId, sellerId);
        return this.productsRepository.addImage({ productId, ...data });
    }
    async removeImage(imageId, productId, sellerId) {
        await this.findOne(productId, sellerId);
        const result = await this.productsRepository.removeImage(imageId, productId);
        if (result.count === 0) {
            throw new common_1.NotFoundException('Image not found');
        }
        return { deleted: true, id: imageId };
    }
    async setPrimaryImage(imageId, productId, sellerId) {
        await this.findOne(productId, sellerId);
        await this.productsRepository.setPrimaryImage(imageId, productId);
        return this.findOne(productId, sellerId);
    }
    async remove(id, sellerId) {
        const result = await this.productsRepository.remove(id, sellerId);
        if (result.count === 0) {
            throw new common_1.NotFoundException('Product not found');
        }
        return { deleted: true, id };
    }
    async decrementStock(productId, quantity) {
        return this.productsRepository.decrementStock(productId, quantity);
    }
    async enforcePlanLimit(sellerId) {
        const seller = await this.sellerRepository.findById(sellerId);
        if (!seller)
            throw new common_1.NotFoundException('Seller not found');
        const plan = seller.plan ?? 'FREE';
        const limit = PLAN_PRODUCT_LIMITS[plan] ?? 10;
        if (limit === Infinity)
            return;
        const count = await this.productsRepository.countBySeller(sellerId);
        if (count >= limit) {
            throw new common_1.ForbiddenException(`Your ${plan} plan allows a maximum of ${limit} products. ` +
                `Upgrade to Basic ($8/mo) or Pro ($20/mo) for unlimited products.`);
        }
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository,
        store_repository_1.StoreRepository,
        sellers_repository_1.SellersRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map