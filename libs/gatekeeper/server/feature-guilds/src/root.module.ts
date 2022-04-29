import { Module } from '@nestjs/common';
import { GuildModule } from './lib/guilds.module';
@Module({
  exports: [GuildModule],
  imports: [GuildModule]
})
export class FeatureGuildsModule {}
