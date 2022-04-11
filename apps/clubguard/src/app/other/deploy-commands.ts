import { REST } from '@discordjs/rest';
import { ChannelType, Routes } from 'discord-api-types/v9';

import { SlashCommandBuilder } from '@discordjs/builders';
import { environment } from '../../environments/environment';

import * as Commands from '../commands';
import { Command } from '../models/command';

const commands = [];

Object.keys(Commands).forEach(commandName => {
  const command: Command = new Commands[commandName].default();
  const bareCommand = new SlashCommandBuilder().setName(command.name).setDescription(command.description);

  if (command.channelOptions) {
    command.channelOptions.forEach(data => {
      bareCommand.addChannelOption(option =>
        option
          .setName(data.name)
          .setDescription(data.description)
          .setRequired(data.required)
          .addChannelTypes(data.types as any)
      );
    });
  }

  if (command.stringOptions) {
    command.stringOptions.forEach(data => {
      bareCommand.addStringOption(option =>
        option.setName(data.name).setDescription(data.description).setRequired(data.required)
      );
    });
  }
  commands.push(bareCommand);
});

const rest = new REST({ version: '9' }).setToken(environment.discordToken);

rest
  .put(Routes.applicationGuildCommands(environment.clientId, environment.guildId), {
    body: commands
  })
  .then(() => console.log('tesing'));
