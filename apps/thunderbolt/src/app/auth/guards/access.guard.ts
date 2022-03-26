import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private readonly db: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { id } = request.params;

    const members = await this.db.groupMembers.findMany({
      where: {
        groupId: id
      },
      include: {
        Group: {
          select: {
            id: true,
            members: true
          }
        }
      }
    });

    const [memberInGroup] = members.filter(v => v.userId === request.user.id);
    if (!memberInGroup) return false;
    if (memberInGroup.groupId === id) return true;
  }
}
