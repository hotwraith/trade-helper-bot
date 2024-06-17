const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
	.setName('booze-format')
	.setDescription('Replies with trade format for Booze Cruise loading!')
	.addStringOption(option =>
		option.setName('carrier')
			.setDescription('Your carrier name')
            .setRequired(true))
    .addStringOption(option =>
		option.setName('id')
			.setDescription('Your carrier idin XXX-XXX format')
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
        option.setName('wine')
            .setDescription('wine required in tons')
            .setRequired(true))
    .addStringOption(option =>
        option.setName('need-trit')
        .setDescription('Is tritium required ?')
        .setRequired(true)
        .addChoices(
            {name: 'Yes', value: 'true'},
            {name: 'No', value: 'false'},))
    .addStringOption(option =>
        option.setName('tritium')
            .setDescription('Tritium required in tons')
            .setRequired(false))
    .addStringOption(option =>
        option.setName('price')
            .setDescription('Buy price for tritium')
            .setRequired(false)),

	async execute(interaction) {
        const carrier = interaction.options.getString('carrier')
        const id = interaction.options.getString('id')
        const system = interaction.options.getString('system')
        const station = interaction.options.getString('station')
        const need = interaction.options.getString('need-trit')
        const wine = interaction.options.getString('wine')
        const tritium = interaction.options.getString('tritium')
        const price = interaction.options.getString('price')
        if (need == 'true') {
            tritiums = ` + **${tritium}k** :oil: **@ ${price}k/t**`
        }
        else {
            tritiums = ""
        }
		await interaction.reply(`\`\`\`**${carrier}** (${id}) | <@${interaction.user.id}> | ${system}/${station} - **${wine}k** :wine_glass:${tritiums}\`\`\``);
        }, 
};