import type { Prisma } from '@prisma/client';
import { profileSeedData } from './data/profile.data';

export async function seedProfile(tx: Prisma.TransactionClient) {
  await tx.profile.create({ data: profileSeedData });
}
