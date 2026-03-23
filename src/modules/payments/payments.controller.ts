import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InitiatePaymentDto } from './dto/initiate-payment.dto';
import { PaymentWebhookDto } from './dto/payment-webhook.dto';
import { VerifyPaymentDto } from './dto/verify-payment.dto';
import { PaymentsService } from './payments.service';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post('initiate')
  initiate(@Body() payload: InitiatePaymentDto) {
    return this.paymentsService.initiate(payload);
  }

  @Post('verify')
  verify(@Body() payload: VerifyPaymentDto) {
    return this.paymentsService.verify(payload);
  }

  @Post('webhook')
  webhook(@Body() payload: PaymentWebhookDto) {
    return this.paymentsService.webhook(payload);
  }
}
