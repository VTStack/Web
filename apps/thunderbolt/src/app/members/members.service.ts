import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MembersService {
  constructor(private readonly db: PrismaService) {}

  async getAllMembersByGroupId(groupId: string) {
    const data = await this.db.groupMembers.findMany({
      where: {
        groupId
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
    return data;
  }
}
