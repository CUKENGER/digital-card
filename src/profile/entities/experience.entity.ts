import { ObjectType, Field, Int, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class Experience {
  @Field(() => Int) id: number;
  @Field() company!: string;
  @Field() position!: string;
  @Field(() => GraphQLISODateTime) startDate!: Date;
  @Field(() => GraphQLISODateTime, { nullable: true }) endDate?: Date | null;
  @Field(() => [String]) achievements!: string[];
}
