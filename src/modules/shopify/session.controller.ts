import { Controller, Post, Get, Delete, Body, Param, Query } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Controller('shopify/sessions')
export class SessionController {
  constructor(private readonly prisma: PrismaService) {}

  @Post()
  async saveSession(@Body() session: any) {
    await this.prisma.session.upsert({
      where: { id: session.id },
      create: session,
      update: session,
    })
    return { success: true }
  }

  @Get(':id')
  async loadSession(@Param('id') id: string) {
    return this.prisma.session.findUnique({
      where: { id }
    })
  }

  @Delete(':id')
  async deleteSession(@Param('id') id: string) {
    await this.prisma.session.deleteMany({
      where: { id }
    })
    return { success: true }
  }

  @Delete()
  async deleteSessionsByShop(@Query('shop') shop: string) {
    await this.prisma.session.deleteMany({
      where: { shop }
    })
    return { success: true }
  }

  @Get()
  async findSessionsByShop(@Query('shop') shop: string) {
    return this.prisma.session.findMany({
      where: { shop }
    })
  }
}
