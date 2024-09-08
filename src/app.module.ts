import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ScryfallModule } from './scryfall/scryfall.module';
import { DecksController } from './decks/decks.controller';
import { DecksService } from './decks/decks.service';

@Module({
  imports: [AuthModule, ScryfallModule],
  controllers: [AppController, DecksController],
  providers: [AppService, DecksService],
})
export class AppModule {}
