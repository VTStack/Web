/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Models } from '../../constants/models';
import { WelcomeDocument } from '../../schemas/welcome.schema';
import { CreateWelcomeDto, RemoveWelcomeDto, FindWelcomeDto, UpdateWelcomeDto } from './dto';

@Injectable()
export class WelcomeRepository {
  constructor(@InjectModel(Models.WELCOME_MODEL) private readonly welcomeModel: Model<WelcomeDocument>) {}
  async createWelcome(server: CreateWelcomeDto) {
    const createdWelcome = new this.welcomeModel(server);
    return await createdWelcome.save();
  }
  async findWelcome(data: FindWelcomeDto): Promise<WelcomeDocument[] | null> {
    return await this.welcomeModel.findOne(data);
  }
  async removeWelcome(data: RemoveWelcomeDto): Promise<any> {
    return await this.welcomeModel.deleteOne(data);
  }
  async updateWelcome(data: UpdateWelcomeDto): Promise<any> {
    const { guildId } = data;
    delete data.guildId;
    return await this.welcomeModel.findOneAndUpdate(
      (document: { guildId: string | undefined }) => document.guildId === guildId,
      data
    );
  }
}
