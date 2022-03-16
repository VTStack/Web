import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { Roles } from '../constants/ROLES';
import { UseAuth } from '../decorators/guard';
import { InviteService } from '../invite/invite.service';
import { MembersService } from './members.service';

@Controller('members')
@UseAuth('jwt')
export class MembersController {
  constructor(private readonly members: MembersService, private readonly invite: InviteService) {}

  @Get()
  async getAllMembersByGroupId(@Query('group_id') groupId: string) {
    const data = await this.members.getAllMembersByGroupId(groupId);
    return data;
  }

  @Post()
  async addMemberToGroup(
    @Query('invite_id') inviteId: string,
    @Query('role') role: Roles = 0,
    @Req() req: { user: { id: string } }
  ) {
    const invite = await this.invite.getInviteById(inviteId);
    return this.invite.addMemberToGroup(req.user.id, invite.Group.id, role);
  }
}
