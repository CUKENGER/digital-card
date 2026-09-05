import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile() {
    const profile = await this.prisma.profile.findFirst();
    if (!profile) throw new NotFoundException('Profile not found');
    return profile;
  }

  findLinks(profileId: number) {
    return this.prisma.link.findMany({ where: { profileId } });
  }

  findSkills(profileId: number) {
    return this.prisma.skill.findMany({ where: { profileId } });
  }

  findExperience(profileId: number) {
    return this.prisma.experience.findMany({
      where: { profileId },
      orderBy: { startDate: 'desc' },
    });
  }

  findProjects(profileId: number) {
    return this.prisma.project.findMany({ where: { profileId } });
  }
}
