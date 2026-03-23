import { Module } from '@nestjs/common';
import { StoreModule } from '../store/store.module';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { ProductsService } from './products.service';
import { SellersModule } from '../sellers/sellers.module';

@Module({
  imports: [StoreModule, SellersModule],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
  exports: [ProductsService, ProductsRepository],
})
export class ProductsModule {}
