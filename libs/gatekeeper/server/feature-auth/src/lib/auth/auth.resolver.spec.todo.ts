import { Test, TestingModule } from '@nestjs/testing';
import { GatedDataAccessModule } from '@v-thomas/gatekeeper/server/data-access';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
describe('AuthResolver', () => {
  let resolver: AuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthResolver, AuthService],
      imports: [GatedDataAccessModule]
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
