module.exports = {
	run: (client: object) => {
		console.log(
			'[EVENT] '.yellow +
				`Client ready in ${client.guilds.cache.size} Servers and ${client.users.cache.size} Members`
		);
	},
};
