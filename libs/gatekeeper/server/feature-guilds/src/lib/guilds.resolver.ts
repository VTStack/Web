import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  GuildRepository,
  CreateGuildDto,
  WelcomeRepository,
  AuthRepository
} from '@v-thomas/gatekeeper/server/data-access';

@Resolver('Testing')
export class TestingResolver {
  constructor(
    private readonly guildRepository: GuildRepository,
    private readonly welcomeRepository: WelcomeRepository,
    private readonly authRepository: AuthRepository
  ) {}

  @Mutation('createGuild')
  async create(@Args('guildId') guildId: string) {
    try {
      await this.guildRepository.createGuild({ guildId });
      return { ok: true };
    } catch (e) {
      return { ok: false, error: 'DUPLICATE_GUILDS' };
    }
  }

  @Mutation('removeGuild')
  async removeGuild(@Args('guildId') guildId: string) {
    try {
      await this.guildRepository.removeGuild({ guildId });
      await this.welcomeRepository.removeWelcome({ guildId });
      await this.authRepository.removeAuth({ guildId });
      return { ok: true };
    } catch (e) {
      console.error(e);
      return { ok: false };
    }
  }
  // @Mutation('modifyGuild')
  // async modifyGuild(@Args('guild') data: ModifyGuildDto) {
  //   try {
  //     await this.guildRepository.modifyGuild(data);
  //     return { ok: true };
  //   } catch (e) {
  //     console.error(e);
  //     return { ok: false };
  //   }
  // }

  @Query('guild')
  async findOne(@Args('guild') guild: { guildId: string }) {
    const data = await this.guildRepository.findGuild(guild);
    return data;
  }
}
