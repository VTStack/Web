import { Test, TestingModule } from '@nestjs/testing';
import { TicketResolver } from './ticket.resolver';
import { TicketService } from './ticket.service';

describe('TicketResolver', () => {
  let resolver: TicketResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketResolver, TicketService]
    }).compile();

    resolver = module.get<TicketResolver>(TicketResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
