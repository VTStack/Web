import { Test, TestingModule } from '@nestjs/testing';
import { GuildRepository } from './server.repository';

describe('UserService', () => {
  let service: GuildRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuildRepository]
    }).compile();

    service = module.get<GuildRepository>(GuildRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
