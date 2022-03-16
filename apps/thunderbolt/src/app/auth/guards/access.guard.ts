import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { MembersService } from '../../members/members.service';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private readonly members: MembersService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { id } = request.params;
    const members = await this.members.getAllMembersByGroupId(id);
    const [memberInGroup] = members.filter(v => v.userId === request.user.id);
    if (!memberInGroup) return false;
    if (memberInGroup.groupId === id) return true;
  }
}
