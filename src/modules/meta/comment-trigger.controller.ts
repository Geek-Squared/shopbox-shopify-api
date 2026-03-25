import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { CommentTriggerService } from './comment-trigger.service';
import { ShopifyAuthGuard } from '../shopify/guards/shopify-auth.guard';
import { CurrentShop } from '../shopify/decorators/current-shop.decorator';
import { CreateTriggerDto } from './dto/create-trigger.dto';

@ApiTags('Instagram Triggers')
@ApiBearerAuth()
@UseGuards(ShopifyAuthGuard)
@Controller('meta/triggers')
export class CommentTriggerController {
  constructor(private readonly triggerService: CommentTriggerService) {}

  @ApiOperation({ summary: 'List all triggers' })
  @Get()
  async list(@Request() req: any) {
    const merchantId = req.merchant.id;
    return this.triggerService.listTriggers(merchantId);
  }

  @ApiOperation({ summary: 'Create a new trigger' })
  @Post()
  async create(@Body() dto: CreateTriggerDto, @Request() req: any) {
    const merchantId = req.merchant.id;
    return this.triggerService.createTrigger(merchantId, dto);
  }

  @ApiOperation({ summary: 'Update a trigger' })
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: any, @Request() req: any) {
    const merchantId = req.merchant.id;
    return this.triggerService.updateTrigger(merchantId, id, dto);
  }

  @ApiOperation({ summary: 'Delete a trigger' })
  @Delete(':id')
  async delete(@Param('id') id: string, @Request() req: any) {
    const merchantId = req.merchant.id;
    return this.triggerService.deleteTrigger(merchantId, id);
  }

  @ApiOperation({ summary: 'Get trigger statistics' })
  @Get('stats')
  async stats(@Request() req: any) {
    const merchantId = req.merchant.id;
    return this.triggerService.getTriggerStats(merchantId);
  }
}
