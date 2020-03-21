import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { HeroRepository } from '../../repository/hero.repository';
import { KillDragonCommand } from '../impl/kill-dragon.command';
import { StoreEventPublisher } from 'event-sourcing-nestjs';

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand> {
  constructor(
    private readonly repository: HeroRepository,
    private readonly publisher: StoreEventPublisher,
  ) {}

  async execute(command: KillDragonCommand) {
    console.log(clc.greenBright('KillDragonCommand...'));

    const { heroId, dragonId } = command;
    const hero = this.publisher.mergeObjectContext(
      await this.repository.findOneById(heroId),
    );
    hero.killEnemy(dragonId);
    hero.commit();
  }
}
