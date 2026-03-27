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
import { ShopifyRepository } from './shopify.repository';

@ApiTags('Shopify Sessions')
@Controller('shopify/sessions')
export class ShopifySessionController {
  private readonly logger = new Logger(ShopifySessionController.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly repository: ShopifyRepository,
  ) {}

  @ApiOperation({ summary: 'Save an OAuth session' })
  @Post()
  async saveSession(@Body() session: any) {
    this.logger.log(`Saving session for shop: ${session.shop}`);

    const data = { ...session };
    if (data.userId && typeof data.userId === 'string') {
      data.userId = BigInt(data.userId);
    }

    const result = await this.prisma.session.upsert({
      where: { id: session.id },
      create: data,
      update: data,
    });

    const isOnline = data.isOnline === true || data.isOnline === 'true';

    // If this is an OFFLINE session (permanent token), update the ShopifyMerchant table
    if (!isOnline && data.accessToken) {
      this.logger.log(`Syncing & Activating ShopifyMerchant: ${data.shop}`);
      try {
        await this.repository.upsertMerchant({
          shop: data.shop,
          accessToken: data.accessToken,
          scope: data.scope,
          isActive: true, // Force reactivation
        });
        this.logger.log(`Merchant ${data.shop} successfully activated`);
      } catch (err) {
        this.logger.error(`Failed to activate merchant ${data.shop}:`, err);
        // We log it but let the result return so the session save is acknowledged
      }
    } else {
      this.logger.debug(
        `Received ${isOnline ? 'ONLINE' : 'OFFLINE'} session for ${data.shop}`,
      );
    }

    return result;
  }


  @ApiOperation({ summary: 'Load an OAuth session' })
  @Get(':id')
  async loadSession(@Param('id') id: string) {
    const session = await this.prisma.session.findUnique({
      where: { id },
    });
    
    if (session) {
      this.logger.debug(`Loaded session ${id} for ${session.shop}`);

      // PROACTIVE REACTIVATION: 
      // If we have an offline session with a token, ensure the merchant is marked active
      if (id.startsWith('offline_') && session.accessToken) {
        this.logger.log(`Proactively activating merchant during session load: ${session.shop}`);
        await this.repository.upsertMerchant({
          shop: session.shop,
          accessToken: session.accessToken,
          scope: session.scope || '',
          isActive: true,
        });
      }

      if (session.userId) {
        // BigInt needs to be converted back to string for JSON serialization
        return { ...session, userId: session.userId.toString() };
      }
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
