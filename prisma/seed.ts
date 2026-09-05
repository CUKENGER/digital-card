import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  await prisma.link.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.project.deleteMany();
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      name: 'Андрей Чувашов',
      description: 'Backend-разработчик, Node.js / TypeScript.',
      links: {
        create: [
          { label: 'GitHub', url: 'https://github.com/CUKENGER' },
        ],
      },
      skills: {
        create: [
          { name: 'TypeScript' },
          { name: 'NestJS' },
          { name: 'Prisma' },
          { name: 'GraphQL' },
          { name: 'Docker' },
        ],
      },
      experience: {
        create: [
          {
            company: 'ООО ИТ-Финанс',
            position: 'Fullstack Developer',
            startDate: new Date('2022-01-01'),
            endDate: null,
            achievements: ['Спроектировал GraphQL API', 'Внедрил CI/CD'],
          },
        ],
      },
      projects: {
        create: [
          {
            name: 'Digital Card',
            url: 'https://github.com/CUKENGER/digital-card',
          },
        ],
      },
    },
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
