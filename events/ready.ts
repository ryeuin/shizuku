module.exports = {
	run: (client: object) => {
		console.log(
			'[EVENT] '.yellow +
				// @ts-ignore
				`Client ready in ${client.guilds.cache.size} Servers and ${client.users.cache.size} Members`
		);
	},
};
