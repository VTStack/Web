import { CreateGuildDto } from './create-server.tdo';

export interface ModifyGuildDto {
  guildId: string;
  data: CreateGuildDto;
}
