import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdersRepository } from '../orders/orders.repository';
import { InitiatePaymentDto } from './dto/initiate-payment.dto';
import { PaymentWebhookDto } from './dto/payment-webhook.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
import { PaymentsRepository } from './payments.repository';

@Injectable()
export class PaymentsService {
  constructor(
    private readonly paymentsRepository: PaymentsRepository,
    private readonly ordersRepository: OrdersRepository,
  ) {}

  async initiate(payload: InitiatePaymentDto) {
    const order = await this.ordersRepository.findById(payload.orderId);
    if (!order) {
      throw new NotFoundException('Order not found');
    }

    const payment = await this.paymentsRepository.create({
      orderId: order.id,
      provider: payload.provider,
      amount: order.totalAmount,
      currency: 'USD',
      gatewayReference: `init-${Date.now()}`,
      status: 'PENDING',
    });

    return {
      paymentId: payment.id,
      provider: payment.provider,
      amount: payment.amount,
      status: payment.status,
      checkoutUrl: `https://pay.example.com/${payment.id}`,
    };
  }

  async verify(payload: VerifyPaymentDto) {
    const payment = await this.paymentsRepository.findById(payload.paymentId);
    if (!payment) {
      throw new NotFoundException('Payment not found');
    }

    const updated = await this.paymentsRepository.update(payment.id, {
      status: 'SUCCESS',
      gatewayReference: payload.gatewayReference,
    });

    return {
      paymentId: updated.id,
      status: updated.status,
      gatewayReference: updated.gatewayReference,
    };
  }

  webhook(payload: PaymentWebhookDto) {
    return {
      accepted: true,
      paymentId: payload.paymentId ?? null,
      gatewayReference: payload.gatewayReference ?? null,
    };
  }
}
