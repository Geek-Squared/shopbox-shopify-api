import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StoreModule } from '../store/store.module';
import { WhatsappController } from './whatsapp.controller';
import { WhatsappRepository } from './whatsapp.repository';
import { WhatsappService } from './whatsapp.service';
import { BotEngineService } from './bot-engine.service';
import { BotSessionService } from './bot-session.service';

@Module({
  imports: [ConfigModule, StoreModule],
  controllers: [WhatsappController],
  providers: [WhatsappService, WhatsappRepository, BotEngineService,
    BotSessionService],
  exports: [WhatsappService, WhatsappRepository, BotSessionService],
})
export class WhatsappModule { }

