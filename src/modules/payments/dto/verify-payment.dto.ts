import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class VerifyPaymentDto {
  @ApiProperty()
  @IsString()
  paymentId: string;

  @ApiProperty()
  @IsString()
  gatewayReference: string;
}
