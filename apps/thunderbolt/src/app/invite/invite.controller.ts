import { ConflictException, Controller, Delete, Get, HttpStatus, Post, Query, Req } from '@nestjs/common';
import { Messages } from '../constants/MESSAGES';
import { UseAuth } from '../decorators/guard';
import { InviteService } from './invite.service';

@Controller('invite')
@UseAuth('jwt')
export class InviteController {
  constructor(private readonly invite: InviteService) {}

  @Post('create')
  async createInvite(@Query('group_id') groupId: string, @Req() req: any) {
    return await this.invite.createLink(groupId, req.user.id).catch(e => {
      console.log(e);
      throw new ConflictException(
        { error: true, errorCode: HttpStatus.CONFLICT },
        Messages['Already a member in group']
      );
    });
  }

  @Get()
  async getInvite(@Query('invite_id') inviteId: string, @Req() req: any) {
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
  async getUserInvites(@Req() req: any, @Query('group_id') groupId: string) {
    const data = await this.invite.getUserInvitesInGroup(req.user.id, groupId);
    return data;
  }

  @Delete('remove_invite')
  async removeInvites(@Req() req: any, @Query('invite_id') inviteId: string) {
    console.log(inviteId);
    const data = await this.invite.removeInvite(inviteId);
    return data;
  }
}
