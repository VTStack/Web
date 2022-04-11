import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateWelcomeDto, UpdateWelcomeDto, WelcomeRepository } from '../../../data-access/src/repositories';

@Resolver('Welcome')
export class WelcomeResolver {
  constructor(private readonly welcomeRepository: WelcomeRepository) {}

  @Mutation('createWelcome')
  create(@Args('data') data: CreateWelcomeDto) {
    return this.welcomeRepository.createWelcome(data);
  }

  @Query('welcome')
  async findOne(@Args('guildId') guildId: string) {
    const data = await this.welcomeRepository.findWelcome({ guildId });
    return data;
  }

  @Mutation('updateWelcome')
  async update(@Args('data') data: UpdateWelcomeDto) {
    const response = await this.welcomeRepository.updateWelcome(data);
    return response;
  }

  @Mutation('removeWelcome')
  remove(@Args('guildId') guildId: string) {
    return this.welcomeRepository.removeWelcome({ guildId });
  }
}
