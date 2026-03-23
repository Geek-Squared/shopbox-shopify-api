import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Req } from '@nestjs/common';
import { PostMappingService } from './post-mapping.service';
import { ShopifyAuthGuard } from '../shopify/guards/shopify-auth.guard';

@Controller('meta/post-mappings')
@UseGuards(ShopifyAuthGuard)
export class PostMappingController {
  constructor(private readonly postMappingService: PostMappingService) {}

  @Post()
  async create(@Req() req: any, @Body() body: {
    postUrl: string;
    platform: 'facebook' | 'instagram';
    shopifyProductId: string;
  }) {
    const merchantId = req.merchant.id;
    return this.postMappingService.createMapping(merchantId, body);
  }

  @Get()
  async list(@Req() req: any) {
    const merchantId = req.merchant.id;
    return this.postMappingService.listMappings(merchantId);
  }

  @Put(':id')
  async update(@Req() req: any, @Param('id') id: string, @Body() body: any) {
    const merchantId = req.merchant.id;
    return this.postMappingService.updateMapping(merchantId, id, body);
  }

  @Delete(':id')
  async remove(@Req() req: any, @Param('id') id: string) {
    const merchantId = req.merchant.id;
    return this.postMappingService.deleteMapping(merchantId, id);
  }
}
