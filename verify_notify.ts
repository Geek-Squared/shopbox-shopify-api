
import { WhatsappService } from './src/modules/whatsapp/whatsapp.service';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './src/prisma/prisma.service';

async function verify() {
  const mockConfig = {
    get: (key: string) => {
      if (key === 'WHATSAPP_PHONE_ID') return '123456789';
      if (key === 'WHATSAPP_TOKEN') return 'mock-token';
      return null;
    }
  } as unknown as ConfigService;

  const mockPrisma = {
    whatsappMessage: {
      create: async (data: any) => {
        // console.log('[MOCK PRISMA] Logged message:', data);
        return data.data;
      }
    }
  } as unknown as PrismaService;

  const service = new WhatsappService(mockConfig, mockPrisma);

  console.log('\n--- Verifying notifyBuyerOrderConfirmed ---');
  try {
    await service.notifyBuyerOrderConfirmed(
      '263770000000',
      'ORD-123',
      'Test Store',
      100.50,
      '4321',
      'test-store'
    );
  } catch (e) {}

  console.log('\n--- Verifying notifySellerNewOrder ---');
  try {
    await service.notifySellerNewOrder(
      '263770000001',
      'ORD-123',
      'John Doe',
      '2x Bread, 1x Milk',
      10.00,
      'COD'
    );
  } catch (e) {}
}

verify().catch(console.error);
