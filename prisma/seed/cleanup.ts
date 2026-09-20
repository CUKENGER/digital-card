import type { Prisma } from '@prisma/client';

export async function cleanup(tx: Prisma.TransactionClient) {
  await tx.link.deleteMany();
  await tx.skill.deleteMany();
  await tx.experience.deleteMany();
  await tx.project.deleteMany();
  await tx.profile.deleteMany();
}
