import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Pen {
  id: string;
  color: string;

  @Field(() => Int)
  size: number;
}
