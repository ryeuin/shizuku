import * as colors from 'colors';

module.exports = (client: object, interaction: any) => {
	if (!interaction.isChatInputCommand()) return;
	interaction.deferReply();
	console.log(
		'[EVENT] '.yellow +
			// @ts-ignore
			`${interaction.author} ran the ${interaction.name} command`
	);
};
