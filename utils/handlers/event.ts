import * as colors from 'colors';
import { readdirSync } from 'node:fs';

module.exports = (client: object) => {
	const commands = readdirSync('./events').filter(file => file.endsWith('.js'));
	for (let file of commands) {
		try {
			let pull = require(`../../events/${file}`);
			if (pull.event && typeof pull.event !== 'string') {
				continue;
			}

			pull.event = pull.event || file.replace('.js', '');
			// @ts-ignore
			client.on(pull.event, pull.run.bind(null, client));
		} catch (err) {
			console.log('[SUCCESS] '.green + 'All events loaded.');
			console.log('[ERROR] '.red + err);
		}
	}
};
