import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UpdateUserDto, CreateUserDto, UserRepository } from '@v-thomas/gatekeeper/server/data-access';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly userRepository: UserRepository) {}

  @Mutation('createUser')
  create(@Args('guild') guild: CreateUserDto) {
    return this.userRepository.createUser(guild);
  }

  @Query('user')
  findOne(@Args('guildId') guildId: string) {
    return this.userRepository.findUserbyId(guildId);
  }

  @Mutation('updateUser')
  update(@Args('guild') user: UpdateUserDto) {
    return this.userRepository.updateUser(user);
  }

  @Mutation('removeUser')
  remove(@Args('guildId') guildId: string) {
    return this.userRepository.removeUser(guildId);
  }
}
