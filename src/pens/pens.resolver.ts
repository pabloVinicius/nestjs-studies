import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PenInput } from './Inputs/pen.input';
import { Pen } from './models/pen.model';
import { PensService } from './pens.service';

@Resolver(() => Pen)
export class PenResolver {
  constructor(private readonly pensService: PensService) {}

  @Query(() => [Pen], { nullable: 'items' })
  getPens() {
    return this.pensService.findAll();
  }

  @Mutation(() => Pen)
  createPen(@Args('pen') pen: PenInput) {
    return this.pensService.create(pen);
  }

  @Query(() => Pen)
  getPenDetails(@Args('id') id: string) {
    return this.pensService.findOne(id);
  }

  @Mutation(() => Pen)
  updatePen(@Args('id') id: string, @Args('pen') pen: PenInput) {
    return this.pensService.updatePen(id, pen);
  }

  @Mutation(() => Pen)
  deletePen(@Args('id') id: string) {
    return this.pensService.deletePen(id);
  }
}
