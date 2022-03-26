import { ConflictException, Controller, Delete, Get, HttpStatus, Post, Query, Req } from '@nestjs/common';
import { Messages } from '../constants/MESSAGES';
import { UseAuth } from '../decorators/guard';
import { InviteService } from './invite.service';

@Controller('invite')
@UseAuth('jwt')
export class InviteController {
  constructor(private readonly invite: InviteService) {}

  @Post('create')
  async createInvite(@Query('group_id') groupId: string, @Req() req: { user: { id: string } }) {
    return await this.invite.createLink(groupId, req.user.id).catch(e => {
      throw new ConflictException(
        { error: true, errorCode: HttpStatus.CONFLICT },
        Messages['Already a member in group']
      );
    });
  }

  @Get()
  async getInvite(@Query('invite_id') inviteId: string, @Req() req: { user: { id: string } }) {
    const data = await this.invite.getInviteById(inviteId);
    if (data.inviteOwnerId === req.user.id) {
      throw new ConflictException({
        message: Messages['User owns this invite'],
        statusCode: 409
      });
    }
    return data;
  }

  @Get('user_invites')
  async getUserInvites(@Req() req: { user: { id: string } }, @Query('group_id') groupId: string) {
    const data = await this.invite.getUserInvitesInGroup(req.user.id, groupId);
    return data;
  }

  @Delete('remove_invite')
  async removeInvites(@Query('invite_id') inviteId: string) {
    const data = await this.invite.removeInvite(inviteId);
    return data;
  }
}
