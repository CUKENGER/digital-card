import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Skill } from './skill.entity';
import { Experience } from './experience.entity';
import { Project } from './project.entity';

@ObjectType()
export class Link {
  @Field(() => Int) id: number;
  @Field() label: string;
  @Field() url: string;
}

@ObjectType()
export class Profile {
  @Field(() => Int) id: number;
  @Field() name: string;
  @Field() description: string;
  @Field(() => [Link]) links: Link[];
  @Field(() => [Skill]) skills: Skill[];
  @Field(() => [Experience]) experience: Experience[];
  @Field(() => [Project]) projects: Project[];
}
