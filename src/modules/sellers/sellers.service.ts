import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { SellersRepository } from './sellers.repository';

@Injectable()
export class SellersService {
  constructor(private readonly sellersRepository: SellersRepository) {}

  async getProfile(sellerId: string) {
    const seller = await this.sellersRepository.findById(sellerId);
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }

    return {
      id: seller.id,
      email: seller.email,
      name: seller.name,
      phone: seller.phone,
      createdAt: seller.createdAt,
    };
  }

  async updateProfile(sellerId: string, payload: UpdateSellerDto) {
    const seller = await this.sellersRepository.update(sellerId, payload);
    return {
      id: seller.id,
      name: seller.name,
      phone: seller.phone,
      updatedAt: seller.updatedAt,
    };
  }

  async getById(id: string) {
    const seller = await this.sellersRepository.findById(id);
    if (!seller) {
      throw new NotFoundException('Seller not found');
    }

    return {
      id: seller.id,
      email: seller.email,
      name: seller.name,
      phone: seller.phone,
    };
  }
}
