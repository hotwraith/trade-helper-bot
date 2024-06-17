const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
	.setName('short-format')
	.setDescription('Replies with short trade format for reddit post/discord forum titles!')
    .addStringOption(option =>
		option.setName('type')
			.setDescription('Loading/Unloading')
            .setRequired(true)
			.addChoices(
				{ name: 'Loading', value: "loading" },
				{ name: 'Unloading', value: "unloading" },))
	.addStringOption(option =>
		option.setName('carrier')
			.setDescription('Your carrier name')
            .setRequired(true))
	.addStringOption(option =>
		option.setName('commodity')
			.setDescription('Type the commodity traded')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('system')
            .setDescription('System you are loading/unloading from/to')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('station')
            .setDescription('Station you are buying/selling from/to')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('profit')
            .setDescription('Profit cr/t')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('supply')
            .setDescription('Carrier supply')
            .setRequired(true)),

	async execute(interaction) {
        const type = interaction.options.getString('type')
        const carrier = interaction.options.getString('carrier')
        const commodity = interaction.options.getString('commodity')
        const system = interaction.options.getString('system')
        const station = interaction.options.getString('station')
        const profit = interaction.options.getString('profit')
        const supply = interaction.options.getString('supply')
		await interaction.reply(`\`\`\`${carrier} is ${type} ${commodity} in ${system}/${station} @${profit}k/u for ${supply}k units\`\`\``);
        }, 
};