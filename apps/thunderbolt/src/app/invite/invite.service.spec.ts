import { Test, TestingModule } from '@nestjs/testing';
import { PrismaModule } from '../prisma/prisma.module';
import { InviteService } from './invite.service';

describe('InviteService', () => {
  let service: InviteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InviteService],
      imports: [PrismaModule]
    }).compile();

    service = module.get<InviteService>(InviteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
