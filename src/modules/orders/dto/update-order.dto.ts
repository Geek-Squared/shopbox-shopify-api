import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateOrderDto {
  @ApiPropertyOptional({
    enum: ['PENDING', 'PAID', 'CONFIRMED', 'FULFILLED', 'CANCELLED'],
  })
  @IsOptional()
  @IsIn(['PENDING', 'PAID', 'CONFIRMED', 'FULFILLED', 'CANCELLED'])
  status?: 'PENDING' | 'PAID' | 'CONFIRMED' | 'FULFILLED' | 'CANCELLED';

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  customerName?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  customerPhone?: string;
}
