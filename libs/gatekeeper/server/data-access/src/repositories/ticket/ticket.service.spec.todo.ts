import { Test, TestingModule } from '@nestjs/testing';
import { TicketRepository } from './ticket.repository';

describe('UserService', () => {
  let service: TicketRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketRepository]
    }).compile();

    service = module.get<TicketRepository>(TicketRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
