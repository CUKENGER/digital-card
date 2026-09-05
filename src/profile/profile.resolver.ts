import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { Profile, Link } from './entities/profile.entity';
import { Skill } from './entities/skill.entity';
import { Experience } from './entities/experience.entity';
import { Project } from './entities/project.entity';

@Resolver(() => Profile)
export class ProfileResolver {
  constructor(private readonly profileService: ProfileService) {}

  @Query(() => Profile)
  profile() {
    return this.profileService.getProfile();
  }

  @ResolveField(() => [Link])
  links(@Parent() profile: Profile) {
    return this.profileService.findLinks(profile.id);
  }

  @ResolveField(() => [Skill])
  skills(@Parent() profile: Profile) {
    return this.profileService.findSkills(profile.id);
  }

  @ResolveField(() => [Experience])
  experience(@Parent() profile: Profile) {
    return this.profileService.findExperience(profile.id);
  }

  @ResolveField(() => [Project])
  projects(@Parent() profile: Profile) {
    return this.profileService.findProjects(profile.id);
  }
}
