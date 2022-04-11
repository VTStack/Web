import { Test, TestingModule } from '@nestjs/testing';
import { WelcomeService } from './welcome.service';

describe('WelcomeService', () => {
  let service: WelcomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WelcomeService]
    }).compile();

    service = module.get<WelcomeService>(WelcomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
