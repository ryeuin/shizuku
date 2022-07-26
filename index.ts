import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

['event', 'register'].forEach((x: any) => {
	if (x === 'register') return require(`./utils/handlers/${x}`);
	require(`./utils/handlers/${x}`)(client);
});

client.login(process.env.TOKEN);
