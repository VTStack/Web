import { CommandInteraction } from 'discord.js';
import { AppClient } from '../../client';
import { Command } from '../../models/command';

export default class implements Command {
  name = 'ping';
  description = 'replies to ping';
  stringOptions = [
    {
      name: 'description',
      description: 'testing description',
      required: false
    }
  ];
  channelOptions = [
    {
      name: 'chaneldpen',
      description: 'descriptionchannl',
      required: false,
      types: [0]
    }
  ];

  run = async interaction => {
    interaction.reply('pong!');
  };
}
