const path = require('path');
const { PrismaClient } = require(path.join(__dirname, 'generated', 'prisma'));
const prisma = new PrismaClient();

async function go() {
  const m = await prisma.shopifyMerchant.findUnique({ where: { shop: 'shopboxx-dev.myshopify.com' } });
  if (!m) { console.log('No merchant'); return; }

  console.log('Merchant ID:', m.id);
  console.log('Page ID:', m.messengerPageId);

  const existing = await prisma.postProductMapping.findMany({ where: { merchantId: m.id } });
  console.log('Existing mappings:', existing.length);
}

go().finally(() => prisma.$disconnect());
