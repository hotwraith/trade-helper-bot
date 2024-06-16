const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('best-carrier')
		.setDescription('Replies with name of the best carrier!'),
    
    carriers : ["P.T.N. Tykie", "P.T.N. Sketchy", "P.T.N. Gaïa's Refuge", "PTN Bay of my heart", "P.T.N. BANKRUPTCY", "PTN Afterlife", "P.T.N. Valeria", "P.T.N. Angry Gnome", "P.T.N. the Peregrine", "P.T.N. Legendary"],
	async execute(interaction) {
        number = Math.floor(Math.random() * 11);
        carrier = carriers[number]
		await interaction.reply(`The best carreier is: ${carrier}`);
	},
};