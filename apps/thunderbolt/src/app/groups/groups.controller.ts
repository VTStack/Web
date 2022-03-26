import { Controller, Get, Param, Post, Query, Req, UseGuards } from '@nestjs/common';
import { AccessGuard } from '../auth/guards/access.guard';
import { UseAuth } from '../decorators/guard';
import { GroupsService } from '../groups/groups.service';

@Controller('groups')
@UseAuth('jwt')
export class GroupsController {
  constructor(private readonly groups: GroupsService) {}

  @Get('all')
  async getAllGroups(@Req() req: { user: { id: string } }) {
    return await this.groups.getAll(req.user.id);
  }

  @Get(':id')
  @UseGuards(AccessGuard)
  async getGroupById(@Param('id') id: string) {
    return await this.groups.getById(id);
  }

  @Post()
  async createGroup(@Query('name') name: string, @Req() req: { user: { id: string } }) {
    return await this.groups.createGroup(name, req.user?.id);
  }
}
