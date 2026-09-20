import { PrismaClient } from '@prisma/client';
import { seedProfile } from './profile.seed';
import { cleanup } from './cleanup';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  await prisma.$transaction(async (tx) => {
    await cleanup(tx);
    await seedProfile(tx);
  });

  console.log('Seeding finished.');
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
