import { Client } from 'discord.js';
import { environment } from '../../environments/environment';

import * as events from '../events';
import * as commands from '../commands';
export class AppClient extends Client {
  constructor() {
    super({
      intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS', 'GUILD_PRESENCES']
    });
  }

  public async start() {
    await this.login(environment.discordToken);

    this.on('interactionCreate', async interaction => {
      if (!interaction.isCommand()) return;
      const { commandName } = interaction;
      new commands[commandName].default().run(interaction, this);
    });

    this.on('ready', () => console.log('ready'));
    Object.keys(events).forEach(event => {
      this.on(new events[event].default().event, (...props) =>
        new events[event].default().run(...props, this)
      );
    });
  }
}
