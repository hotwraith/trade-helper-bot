const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
	.setName('all-purpose-format')
	.setDescription('Replies with different possible formats!')
    .addStringOption(option =>
		option.setName('formats')
			.setDescription('Different formats')
            .setRequired(true)
			.addChoices(
				{ name: 'ACO bot format', value: "ACO" },
				{ name: 'Short format', value: "short" },
                { name: 'Paragraph format', value: "paragraph" },))
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
		option.setName('id')
			.setDescription('Your carrier id')
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
            .setRequired(true))
    .addStringOption(option =>
        option.setName('pads')
            .setDescription('Pads size')
            .setRequired(true)
			.addChoices(
				{ name: 'Large', value: 'L-pads' },
				{ name: 'Medium', value: 'M-pads' },)),

	async execute(interaction) {
        const formats = interaction.options.getString('formats')
        const type = interaction.options.getString('type')
        const carrier = interaction.options.getString('carrier')
        const id = interaction.options.getString('id')
        const commodity = interaction.options.getString('commodity')
        const system = interaction.options.getString('system')
        const station = interaction.options.getString('station')
        const profit = interaction.options.getString('profit')
        const supply = interaction.options.getString('supply')
        const pads = interaction.options.getString('pads')
        if (type == "unloading") { 
            from = "to"
            buying = `${carrier} (${id})`
            selling = `${station} (${pads})`
        }
        else {
            from = "from"
            buying = `${station} (${pads})`
            selling = `${carrier} (${id})`
        }
        if (formats == "ACO") {
            message = `\`\`\`**${carrier} (${id})** is ${type} **${commodity}** ${from} **${station}** (${pads}) in **${system}**. **${profit}k**/unit profit, **${supply}k** units.\`\`\``
        }
        else if (formats == "short") { 
            message = `\`\`\`${carrier} is ${type} ${commodity} in ${system}/${station} @${profit}k/u for ${supply}k units\`\`\``
        }
        else if (formats == "paragraph") {
            message = ` \`\`\` INCOMING WIDEBAND TRANSMISSION: **${carrier}** (${id}) __**${type}**__ MISSION IN PROGRESS\n BUY FROM: **${buying}**\n COMMODITY: **${commodity}**\n SELL TO: **${selling}** in system **${system}**\n PROFIT: **${profit}k/unit** : **${supply}k** supply\`\`\``
        }
        else {
            message = "Error in formatting, please retry."
        }
		await interaction.reply(`${message}`);
        }, 
};