import { Test, TestingModule } from '@nestjs/testing';
import { DataWelcomeModule } from './welcome.module';
import { WelcomeRepository } from './welcome.repository';

describe('UserService', () => {
  let service: WelcomeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DataWelcomeModule]
    }).compile();

    service = module.get<WelcomeRepository>(WelcomeRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
