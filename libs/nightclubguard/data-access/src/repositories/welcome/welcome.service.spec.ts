import { Test, TestingModule } from '@nestjs/testing';
import { WelcomeRepository } from './welcome.repository';

describe('UserService', () => {
  let service: WelcomeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WelcomeRepository]
    }).compile();

    service = module.get<WelcomeRepository>(WelcomeRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
