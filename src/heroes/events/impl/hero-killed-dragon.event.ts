import { StorableEvent } from 'event-sourcing-nestjs';

export class HeroKilledDragonEvent extends StorableEvent {

  eventAggregate = 'hero';
  eventVersion = 1;
  
  constructor(
    public readonly id: string,
    public readonly dragonId: string,
  ) {
    super();
  }
}
