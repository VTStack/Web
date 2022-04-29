import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Models } from '../../constants/models';
import { AuthDocument } from '../../schemas/auth.schema';
import { TicketDocument } from '../../schemas/ticket.schema';
import { CreateTicketDto, RemoveTicketDto, FindTicketDto, UpdateTicketDto } from './dto';

@Injectable()
export class TicketRepository {
  constructor(
    @InjectModel(Models.TICKET_MODEL)
    private readonly authModel: Model<TicketDocument>
  ) {}
  async createAuth(server: CreateTicketDto) {
    const createdAuth = new this.authModel(server);
    return await createdAuth.save();
  }
  async findAuth(data: FindTicketDto): Promise<AuthDocument[] | null> {
    return await this.authModel.findOne(data);
  }
  async removeAuth(data: RemoveTicketDto): Promise<any> {
    return await this.authModel.deleteOne(data);
  }
  async modifyAuth(data: UpdateTicketDto): Promise<any> {
    const { guildId } = data;
    delete data.guildId;
    return await this.authModel.findOneAndUpdate((document: any) => document.guildId === guildId, data);
  }
}
