import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Query,
  Logger,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PrismaService } from '../../prisma/prisma.service';

@ApiTags('Shopify Sessions')
@Controller('shopify/sessions')
export class ShopifySessionController {
  private readonly logger = new Logger(ShopifySessionController.name);

  constructor(private readonly prisma: PrismaService) {}

  @ApiOperation({ summary: 'Save an OAuth session' })
  @Post()
  async saveSession(@Body() session: any) {
    this.logger.log(`Saving session for shop: ${session.shop}`);
    
    // Convert BigInt strings to BigInt if necessary, 
    // though the incoming body might already be formatted.
    // Prisma requires BigInt for BigInt fields.
    const data = { ...session };
    if (data.userId && typeof data.userId === 'string') {
      data.userId = BigInt(data.userId);
    }

    return this.prisma.session.upsert({
      where: { id: session.id },
      create: data,
      update: data,
    });
  }

  @ApiOperation({ summary: 'Load an OAuth session' })
  @Get(':id')
  async loadSession(@Param('id') id: string) {
    const session = await this.prisma.session.findUnique({
      where: { id },
    });
    
    if (session && session.userId) {
      // BigInt needs to be converted back to string for JSON serialization
      return { ...session, userId: session.userId.toString() };
    }
    return session;
  }

  @ApiOperation({ summary: 'Delete an OAuth session' })
  @Delete(':id')
  async deleteSession(@Param('id') id: string) {
    await this.prisma.session.deleteMany({
      where: { id },
    });
    return { success: true };
  }

  @ApiOperation({ summary: 'Delete all sessions for a shop' })
  @Delete()
  async deleteSessionsByShop(@Query('shop') shop: string) {
    await this.prisma.session.deleteMany({
      where: { shop },
    });
    return { success: true };
  }
}
