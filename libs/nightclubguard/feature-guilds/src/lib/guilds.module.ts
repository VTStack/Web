import { Module } from '@nestjs/common';
import { TestingService } from './guilds.service';
import { TestingResolver } from './guilds.resolver';
import { NightclubguardDataAccessModule } from '@v-thomas/nightclubguard/data-access';
import { DataGuildModule } from '@v-thomas/nightclubguard/data-access';
@Module({
  providers: [TestingResolver, TestingService],
  imports: [NightclubguardDataAccessModule, DataGuildModule]
})
export class GuildModule {}
