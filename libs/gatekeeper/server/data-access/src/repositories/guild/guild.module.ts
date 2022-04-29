import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Models } from '../../constants/models';
import { AuthSchema } from '../../schemas/auth.schema';
import { GuildSchema } from '../../schemas/guild.schema';
import { GuildRepository } from './guild.repository';

@Module({
  providers: [GuildRepository],
  exports: [GuildRepository],
  imports: [
    MongooseModule.forFeature([
      { name: Models.GUILD_MODEL, schema: GuildSchema, collection: Models.GUILD_MODEL },
      { name: Models.WELCOME_MODEL, schema: AuthSchema, collection: Models.WELCOME_MODEL },
      { name: Models.AUTH_MODEL, schema: AuthSchema, collection: Models.AUTH_MODEL }
    ])
  ]
})
export class DataGuildModule {}
