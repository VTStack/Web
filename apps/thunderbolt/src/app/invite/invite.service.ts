import { ConflictException, Injectable } from '@nestjs/common';
import { Messages } from '../constants/MESSAGES';
import { Roles } from '../constants/ROLES';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class InviteService {
  constructor(
    private readonly db: PrismaService // private readonly group: GroupsService,
  ) {}

  async createLink(groupId: string, userId: string) {
    try {
      console.log(userId, groupId);
      console.log(await this.db.invite.findMany({}));
      const data = await this.db.invite.create({
        data: {
          groupId,
          inviteOwnerId: userId
        }
      });

      data.id = Buffer.from(data.id).toString('base64');

      return data;
    } catch (e: unknown) {
      throw Error('error');
    }
  }
  async getInviteById(inviteId: string) {
    const normalized = Buffer.from(inviteId, 'base64').toString('ascii');

    const invite = await this.db.invite.findFirst({
      where: {
        id: normalized
      },
      include: {
        Group: true,
        InviteOwner: {
          select: {
            createdAt: true,
            email: true,
            id: true,
            password: false
          }
        }
      }
    });
    invite.id = inviteId;

    return invite;
  }

  async getInvites() {
    const data = await this.db.invite.findMany({
      include: {
        Group: true
      }
    });
    return data;
  }

  async addMemberToGroup(currentUserId: string, groupId: string, role: Roles) {
    try {
      const data = await this.db.groupMembers.create({
        data: {
          userId: currentUserId,
          groupId,
          role
        }
      });
      return data;
    } catch (error: unknown) {
      console.log(error);
      throw new ConflictException({ statusCode: 409 }, Messages['Already a member in group']);
    }
  }
  async getUserInvitesInGroup(userId: string, groupId: string) {
    const user = await this.db.user.findMany({
      where: {
        id: userId,
        groups: {
          some: {
            id: groupId
          }
        }
      },
      select: {
        invites: {
          select: {
            id: true,
            groupId: true,
            createdAt: true,
            Group: {
              select: { name: true }
            }
          }
        }
      }
    });
    return user.map(v => v.invites)[0];
  }

  async removeInvite(inviteId: string) {
    return await this.db.invite.delete({
      where: {
        id: inviteId
      }
    });
  }
}
