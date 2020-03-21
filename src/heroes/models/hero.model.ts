import { HeroFoundItemEvent } from '../events/impl/hero-found-item.event';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';
import { AggregateRoot } from '@nestjs/cqrs';

export class Hero extends AggregateRoot {

  public readonly id: string;

  public dragonsKilled: string[] = [];

  public items: string[] = [];

  constructor(id: string) {
    super();
    this.id = id;
  }

  killEnemy(enemyId: string) {
    this.apply(new HeroKilledDragonEvent(this.id, enemyId));
  }

  addItem(itemId: string) {
    this.apply(new HeroFoundItemEvent(this.id, itemId));
  }

  onHeroKilledDragonEvent(event: HeroKilledDragonEvent) {
    this.dragonsKilled.push(event.dragonId);
  }

  onHeroFoundItemEvent(event: HeroFoundItemEvent) {
    this.items.push(event.itemId);
  }

}
