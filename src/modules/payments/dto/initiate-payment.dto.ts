import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString } from 'class-validator';

export class InitiatePaymentDto {
  @ApiProperty()
  @IsString()
  orderId: string;

  @ApiProperty({ enum: ['PAYNOW', 'INNBUCKS'] })
  @IsIn(['PAYNOW', 'INNBUCKS'])
  provider: 'PAYNOW' | 'INNBUCKS';
}
