module.exports = () => {
	const { readdirSync } = require('node:fs');

	module.exports = (client: any) => {
		readdirSync('./commands').forEach((dir: any) => {
			const commands = readdirSync(`./commands/${dir}/`).filter((file: any) =>
				file.endsWith('.js')
			);

			for (let file of commands) {
				let pull = require(`../../commands/${dir}/${file}`);
				pull.name = file.replace('.js', '');
				pull.category = dir;
				client.commands.set(pull.name, pull);

				if (pull.aliases && Array.isArray(pull.aliases))
					pull.aliases.forEach((alias: any) =>
						client.aliases.set(alias, pull.name)
					);
			}
		});
	};
};
