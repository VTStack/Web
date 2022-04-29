import { Test, TestingModule } from '@nestjs/testing';
import { WelcomeResolver } from './welcome.resolver';
import { WelcomeService } from './welcome.service';

describe('WelcomeResolver', () => {
  let resolver: WelcomeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WelcomeResolver, WelcomeService]
    }).compile();

    resolver = module.get<WelcomeResolver>(WelcomeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
