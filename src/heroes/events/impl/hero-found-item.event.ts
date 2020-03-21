import { StorableEvent } from 'event-sourcing-nestjs';

export class HeroFoundItemEvent extends StorableEvent {

  eventAggregate = 'hero';
  eventVersion = 1;

  constructor(public readonly id: string, public readonly itemId: string) {
    super();
  }
}
