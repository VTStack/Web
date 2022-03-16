import { Module } from '@nestjs/common';
import { GroupsService } from '../groups/groups.service';
import { PrismaModule } from '../prisma/prisma.module';
import { InviteController } from './invite.controller';
import { InviteService } from './invite.service';

@Module({
  imports: [PrismaModule],
  providers: [InviteService, GroupsService],
  controllers: [InviteController],
  exports: [InviteService]
})
export class InviteModule {}
