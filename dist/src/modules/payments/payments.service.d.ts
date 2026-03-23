import { OrdersRepository } from '../orders/orders.repository';
import { InitiatePaymentDto } from './dto/initiate-payment.dto';
import { PaymentWebhookDto } from './dto/payment-webhook.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
import { PaymentsRepository } from './payments.repository';
export declare class PaymentsService {
    private readonly paymentsRepository;
    private readonly ordersRepository;
    constructor(paymentsRepository: PaymentsRepository, ordersRepository: OrdersRepository);
    initiate(payload: InitiatePaymentDto): Promise<{
        paymentId: string;
        provider: string;
        amount: number;
        status: import("../../../generated/prisma/enums").PaymentStatus;
        checkoutUrl: string;
    }>;
    verify(payload: VerifyPaymentDto): Promise<{
        paymentId: string;
        status: import("../../../generated/prisma/enums").PaymentStatus;
        gatewayReference: string;
    }>;
    webhook(payload: PaymentWebhookDto): {
        accepted: boolean;
        paymentId: string;
        gatewayReference: string;
    };
}
