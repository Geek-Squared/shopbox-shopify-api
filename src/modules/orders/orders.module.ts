import { Module } from '@nestjs/common';
import { ProductsModule } from '../products/products.module';
import { StoreModule } from '../store/store.module';
import { OrdersController } from './orders.controller';
import { OrdersRepository } from './orders.repository';
import { OrdersService } from './orders.service';
import { WhatsappModule } from '../whatsapp/whatsapp.module';

@Module({
  imports: [StoreModule, ProductsModule, WhatsappModule],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersRepository],
  exports: [OrdersService, OrdersRepository],
})
export class OrdersModule {}
