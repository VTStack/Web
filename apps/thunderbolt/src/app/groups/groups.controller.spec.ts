import { Test, TestingModule } from '@nestjs/testing';
import { InviteService } from '../invite/invite.service';
import { MembersService } from '../members/members.service';
import { PrismaModule } from '../prisma/prisma.module';
import { GroupsController } from './groups.controller';
import { GroupsModule } from './groups.module';
import { GroupsService } from './groups.service';

describe('GroupsController', () => {
  let controller: GroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule, GroupsModule],
      controllers: [GroupsController],
      providers: [GroupsService, InviteService, MembersService]
    }).compile();

    controller = module.get<GroupsController>(GroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
