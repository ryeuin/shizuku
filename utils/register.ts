import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import 'dotenv/config';
import * as nodelua from 'node-lua';

const commands = [
	{
		name: 'ping',
		description: 'Replies with Pong!',
	},
];

// @ts-ignore
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(
				// @ts-ignore
				process.env.CLIENTID,
				// @ts-ignore
				process.env.GUILDID
			),
			{
				body: commands,
			}
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
