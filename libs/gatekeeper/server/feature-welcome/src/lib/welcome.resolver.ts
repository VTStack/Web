import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import {
  CreateWelcomeDto,
  UpdateWelcomeDto,
  WelcomeRepository
} from '@v-thomas/gatekeeper/server/data-access';

@Resolver('Welcome')
export class WelcomeResolver {
  constructor(private readonly welcomeRepository: WelcomeRepository) {}

  @Mutation('createWelcome')
  create(@Args('guild') data: CreateWelcomeDto) {
    return this.welcomeRepository.createWelcome(data);
  }

  @Query('welcome')
  findOne(@Args('guildId') guildId: string) {
    return this.welcomeRepository.findWelcome({ guildId });
  }

  @Mutation('updateWelcome')
  update(@Args('guild') data: UpdateWelcomeDto) {
    return this.welcomeRepository.updateWelcome(data);
  }

  @Mutation('removeWelcome')
  remove(@Args('guildId') guildId: string) {
    return this.welcomeRepository.removeWelcome({ guildId });
  }
}
