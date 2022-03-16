import { Test, TestingModule } from '@nestjs/testing';
import { InviteService } from '../invite/invite.service';
import { PrismaModule } from '../prisma/prisma.module';
import { GroupsService } from './groups.service';

describe('GroupsService', () => {
  let service: GroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupsService, InviteService],
      imports: [PrismaModule]
    }).compile();

    service = module.get<GroupsService>(GroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
