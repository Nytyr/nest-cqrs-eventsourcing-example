import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { GetHeroeQuery } from '../impl';

@QueryHandler(GetHeroeQuery)
export class GetHeroesHandler implements IQueryHandler<GetHeroeQuery> {
  constructor(private readonly repository: HeroRepository) {}

  async execute(query: GetHeroeQuery) {
    console.log(clc.yellowBright('Async GetHeroesQuery...'));
    return this.repository.findOneById(query.id);
  }
}
