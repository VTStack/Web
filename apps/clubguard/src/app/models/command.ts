import { ChannelType } from 'discord-api-types/v9';
import { Interaction } from 'discord.js';
import { AppClient } from '../client';

export interface Command {
  name: string;
  description: string;
  // static run(interaction: Interaction, client: Client): Promise<void> | void;
  stringOptions?: { name: string; description: string; required: boolean }[];

  channelOptions?: {
    name: string;
    description: string;
    required: boolean;
    types: ChannelType[];
  }[];
}
