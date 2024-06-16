const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
	.setName('trade')
	.setDescription('Replies with trade format!')
    .addStringOption(option =>
		option.setName('type')
			.setDescription('Loading/Unloading')
            .setRequired(true)
			.addChoices(
				{ name: 'Loading', value: "LOADING" },
				{ name: 'Unloading', value: "UNLOADING" },))
	.addStringOption(option =>
		option.setName('carrier')
			.setDescription('Your carrier name')
            .setRequired(true)
			.addChoices(
				{ name: 'Refuge', value: "P.T.N. Gaïa's Refuge (VBZ-62J)" },
				{ name: 'Wander', value: "P.T.N. Gaïa's Wander (G8Q-7TB)" },))
	.addStringOption(option =>
		option.setName('commodity')
			.setDescription('Type the commodity traded')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('system')
            .setDescription('System you are loading/unloading from/to')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('buying')
            .setDescription('Station/carrier you are buying from')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('selling')
            .setDescription('Station/carrier you are selling to')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('profit')
            .setDescription('Profit cr/t')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('supply')
            .setDescription('Carrier supply')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('pads')
            .setDescription('Pads size')
            .setRequired(true)
			.addChoices(
				{ name: 'Large', value: 'L-pads' },
				{ name: 'Medium', value: 'M-pads' },)),

	async execute(interaction) {
        const type = interaction.options.getString('type')
        const carrier = interaction.options.getString('carrier')
        const commodity = interaction.options.getString('commodity')
        const system = interaction.options.getString('system')
        const buying = interaction.options.getString('buying')
        const selling = interaction.options.getString('selling')
        const profit = interaction.options.getString('profit')
        const supply = interaction.options.getString('supply')
        const pads = interaction.options.getString('pads')
		await interaction.reply(` \`\`\` INCOMING WIDEBAND TRANSMISSION: ${carrier} __**${type}**__ MISSION IN PROGRESS\n BUY FROM: **${buying}**\n COMMODITY: **${commodity}**\n SELL TO: **${selling}** (${pads}) in system **${system}**\n PROFIT: **${profit}k/unit** : **${supply}k** supply\`\`\``);
        }, 
};