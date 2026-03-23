import { InitiatePaymentDto } from './dto/initiate-payment.dto';
import { PaymentWebhookDto } from './dto/payment-webhook.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
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
