import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { PrismaModule } from '../prisma/prisma.module';
import { InviteService } from '../invite/invite.service';
import { MembersModule } from '../members/members.module';

@Module({
  imports: [PrismaModule, MembersModule],
  controllers: [GroupsController],
  providers: [GroupsService, InviteService]
})
export class GroupsModule {}
