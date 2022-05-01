import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DeleteResult } from 'mongodb';
import { Models } from '../../constants/models';
import { AuthDocument } from '../../schemas/auth.schema';
import { GuildDocument } from '../../schemas/guild.schema';
import { WelcomeDocument } from '../../schemas/welcome.schema';
import { RemoveGuildDto, findGuildDto, CreateGuildDto } from './dto';
import { ModifyGuildDto } from './dto/modify-guild.dto';

@Injectable()
export class GuildRepository {
  constructor(
    @InjectModel(Models.GUILD_MODEL) private readonly guildModel: Model<GuildDocument>,
    @InjectModel(Models.WELCOME_MODEL) private readonly welcomeModel: Model<WelcomeDocument>,
    @InjectModel(Models.AUTH_MODEL) private readonly authModel: Model<AuthDocument>
  ) {}

  async createGuild(server: CreateGuildDto) {
    const createdGuild = new this.guildModel(server);

    const createdAuth = new this.authModel({
      guildId: createdGuild.guildId,
      enabled: false,
      roleId: null
    });

    const createdWelcome = new this.welcomeModel({
      guildId: createdGuild.guildId,
      enabled: false
    });

    await createdAuth.save();
    await createdWelcome.save();

    return await createdGuild.save();
  }

  async findGuild(data: findGuildDto): Promise<GuildDocument[] | null> {
    return await this.guildModel.findOne(data);
  }

  removeGuild(data: RemoveGuildDto): Promise<DeleteResult> {
    return this.guildModel.deleteOne(data).exec();
  }
  async modifyGuild(data: ModifyGuildDto) {
    return await this.guildModel.findOneAndUpdate(
      (document: { guildId: string }) => document.guildId === data.guildId,
      data.data
    );
  }
}
