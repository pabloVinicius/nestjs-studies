import { Field, InputType, Int } from '@nestjs/graphql';

@InputType({ description: 'Input type of a pen' })
export class PenInput {
  color: string;

  @Field(() => Int, { nullable: true })
  size: number;
}
