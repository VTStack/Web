import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

import { SlashCommandBuilder } from '@discordjs/builders';
import { environment } from '../../environments/environment';

import * as Commands from '../commands';
import { Command } from '../models/command';

const commands = [];

Object.keys(Commands).forEach(commandName => {
  const command: Command = new Commands[commandName].default();
  const bareCommand = new SlashCommandBuilder();
  if (command.name) {
    bareCommand.setName(command.name);
  }
  if (command.description) {
    bareCommand.setDescription(command.description);
  }
  if (command.options) {
    commands.push(command.options(bareCommand));
  } else {
    commands.push(bareCommand);
  }
});

const rest = new REST({ version: '9' }).setToken(environment.discordToken);
rest
  .put(Routes.applicationGuildCommands(environment.clientId, environment.guildId), {
    body: commands
  })
  .then(() => console.log('done registering'));
