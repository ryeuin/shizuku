import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require('./utils/register');

['event'].forEach(handler => {
	require(`./utils/handlers/${handler}`)(client);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'ping') {
		await interaction.reply({
			content: `${client.ws.ping}`,
		});
	}
});

client.login(process.env.TOKEN);
