import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional, MaxLength } from 'class-validator';

export class CreateTriggerDto {
  @ApiProperty({ description: 'The keyword to trigger the DM flow', example: 'PRICE' })
  @IsString()
  @MaxLength(20)
  keyword: string;

  @ApiProperty({ description: 'Whether to reply to the comment publicly', required: false, default: true })
  @IsBoolean()
  @IsOptional()
  replyComment?: boolean;

  @ApiProperty({ description: 'Custom message template containing variables like {{product_name}}', required: false })
  @IsString()
  @IsOptional()
  templateMessage?: string;
}
