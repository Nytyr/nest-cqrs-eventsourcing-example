import { Module } from '@nestjs/common';
import { HeroesGameModule } from './heroes/heroes.module';
import { EventSourcingModule } from 'event-sourcing-nestjs';

@Module({
  imports: [
    EventSourcingModule.forRoot({ mongoURL: 'mongodb://localhost:27017/cqrs' }),
    HeroesGameModule,
  ],
})
export class ApplicationModule {}
