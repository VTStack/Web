import { Test, TestingModule } from '@nestjs/testing';
import { GatedDataAccessModule, UserRepository } from '@v-thomas/gatekeeper/server/data-access';
import { UsersResolver } from './users.resolver';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersResolver, UserRepository],
      imports: [GatedDataAccessModule]
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
