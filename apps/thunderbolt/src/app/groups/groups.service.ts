import { Injectable } from '@nestjs/common';
import { Roles } from '../constants/ROLES';
import { InviteService } from '../invite/invite.service';
import { PrismaService } from '../prisma/prisma.service';

// type groupInclude = {
//   user?: boolean;
//   movie?: boolean;
//   invites?: boolean;
//   members?: boolean;
// };

@Injectable()
export class GroupsService {
  constructor(private readonly db: PrismaService, private readonly invite: InviteService) {}

  async getAll(userId: string) {
    const user = await this.db.group.findMany({
      where: {
        OR: [
          {
            User: {
              id: {
                equals: userId
              }
            }
          },
          {
            members: {
              some: {
                userId: {
                  equals: userId
                }
              }
            }
          }
        ]
      }
    });
    console.log('USER', user);
    return user;
  }

  async getById(id: string) {
    return await this.db.group.findUnique({
      where: {
        id
      },
      include: {
        User: false,

        movie: true,
        invites: true,
        members: true
      }
    });
  }

  async createGroup(name: string, ownerId: string) {
    const data = await this.db.group.create({
      data: {
        name,
        ownerId
      }
    });
    await this.invite.addMemberToGroup(ownerId, data.id, Roles.OWNER);
    return data;
  }
}
