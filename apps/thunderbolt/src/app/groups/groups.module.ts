import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { InviteModule } from '../invite/invite.module';
import { GroupsService } from './groups.service';

@Module({
  imports: [PrismaModule, InviteModule],
  controllers: [GroupsController],
  providers: [GroupsService]
})
export class GroupsModule {}
