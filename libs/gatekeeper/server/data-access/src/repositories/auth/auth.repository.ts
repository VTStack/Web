import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Models } from '../../constants/models';
import { AuthDocument } from '../../schemas/auth.schema';
import { CreateAuthDto, RemoveAuthDto, FindAuthDto, UpdateAuthDto } from './dto';

@Injectable()
export class AuthRepository {
  constructor(@InjectModel(Models.AUTH_MODEL) private readonly authModel: Model<AuthDocument>) {}
  async createAuth(server: CreateAuthDto) {
    const createdAuth = new this.authModel(server);
    return await createdAuth.save();
  }
  async findAuth(data: FindAuthDto): Promise<AuthDocument[] | null> {
    return await this.authModel.findOne(data);
  }
  async removeAuth(data: RemoveAuthDto): Promise<any> {
    return await this.authModel.deleteOne(data);
  }
  async modifyAuth(data: UpdateAuthDto): Promise<any> {
    const { guildId } = data;
    delete data.guildId;
    return await this.authModel.findOneAndUpdate((document: any) => document.guildId === guildId, data);
  }
}
