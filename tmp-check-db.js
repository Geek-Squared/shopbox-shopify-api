import { PrismaClient } from './generated/prisma/index.js';
const prisma = new PrismaClient();

async function checkTriggers() {
  const triggers = await prisma.commentTrigger.findMany();
  console.log('--- COMMENT TRIGGERS ---');
  console.log(JSON.stringify(triggers, null, 2));
  await prisma.$disconnect();
}

checkTriggers().catch(console.error);
