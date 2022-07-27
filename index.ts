import { Client, Collection, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// @ts-ignore
client.events = new Collection();
// @ts-ignore
client.commands = new Collection();

['event', 'register', 'command'].forEach((x: any) => {
	if (x === 'register') return require(`./utils/handlers/${x}`);
	require(`./utils/handlers/${x}`)(client);
});

client.login(process.env.TOKEN);
