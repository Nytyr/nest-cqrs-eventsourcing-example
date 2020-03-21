import { Injectable } from '@nestjs/common';
import { Hero } from '../models/hero.model';
import { EventStore } from 'event-sourcing-nestjs';

@Injectable()
export class HeroRepository {

  constructor(
    private readonly eventStore: EventStore,
  ) {}

  async findOneById(id: string): Promise<Hero> {
    const hero = new Hero(id);
    hero.loadFromHistory(await this.eventStore.getEvents('hero', id));
    return hero;
  }
}
