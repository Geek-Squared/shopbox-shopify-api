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
exports.SellersService = void 0;
const common_1 = require("@nestjs/common");
const sellers_repository_1 = require("./sellers.repository");
let SellersService = class SellersService {
    constructor(sellersRepository) {
        this.sellersRepository = sellersRepository;
    }
    async getProfile(sellerId) {
        const seller = await this.sellersRepository.findById(sellerId);
        if (!seller) {
            throw new common_1.NotFoundException('Seller not found');
        }
        return {
            id: seller.id,
            email: seller.email,
            name: seller.name,
            phone: seller.phone,
            createdAt: seller.createdAt,
        };
    }
    async updateProfile(sellerId, payload) {
        const seller = await this.sellersRepository.update(sellerId, payload);
        return {
            id: seller.id,
            name: seller.name,
            phone: seller.phone,
            updatedAt: seller.updatedAt,
        };
    }
    async getById(id) {
        const seller = await this.sellersRepository.findById(id);
        if (!seller) {
            throw new common_1.NotFoundException('Seller not found');
        }
        return {
            id: seller.id,
            email: seller.email,
            name: seller.name,
            phone: seller.phone,
        };
    }
};
exports.SellersService = SellersService;
exports.SellersService = SellersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [sellers_repository_1.SellersRepository])
], SellersService);
//# sourceMappingURL=sellers.service.js.map