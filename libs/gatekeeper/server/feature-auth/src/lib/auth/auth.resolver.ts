import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthRepository, CreateAuthDto, UpdateAuthDto } from '@v-thomas/gatekeeper/server/data-access';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authRepository: AuthRepository) {}

  @Query('auth')
  async findOne(@Args('guildId') guildId: string) {
    return await this.authRepository.findAuth({ guildId });
  }

  @Mutation('updateAuth')
  update(@Args('guild') guild: UpdateAuthDto) {
    return this.authRepository.modifyAuth(guild);
  }

  @Mutation('createAuth')
  create(@Args('guild') guild: CreateAuthDto) {
    return this.authRepository.createAuth(guild);
  }

  @Mutation('removeAuth')
  remove(@Args('guildId') guildId: string) {
    return this.authRepository.removeAuth({ guildId });
  }
}
