import { Test, TestingModule } from '@nestjs/testing';
import { TestingResolver } from './guilds.resolver';
import { TestingService } from './guilds.service';

describe('TestingResolver', () => {
  let resolver: TestingResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestingResolver, TestingService]
    }).compile();

    resolver = module.get<TestingResolver>(TestingResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
