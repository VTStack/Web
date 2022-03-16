import { Module } from '@nestjs/common';
import { InviteModule } from '../invite/invite.module';
import { PrismaModule } from '../prisma/prisma.module';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';

@Module({
  controllers: [MembersController],
  providers: [MembersService],
  imports: [PrismaModule, InviteModule],
  exports: [MembersService]
})
export class MembersModule {}
