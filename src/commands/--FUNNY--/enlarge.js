const {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    AttachmentBuilder,
} = require("discord.js");

const { default: axios } = require('axios')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("enlarge")
        .setDescription("You can make emojis bigger with this command")
        .addStringOption(option => option.setName('emoji').setDescription('The emoji you would like to enlarge').setRequired(true)),

    async execute(interaction) {
        let emoji = interaction.options.getString('emoji')?.trim();

        if (emoji.startsWith('<') && emoji.endsWith('>')) {
            const id = emoji.match(/\d{15,}/g)[0];

            const type = await axios.get(`https://cdn.discordapp.com/emojis/${id}.gif`)
                .then(image => {
                    if (image) return 'gif'
                    else return 'png'
                }).catch(err => {
                    return 'png'
                })

            
            emoji = `https://cdn.discordapp.com/emojis/${id}.${type}?quality=lossless`
        }


        if (!emoji.startsWith('http')) {
            return await interaction.reply({content: `You can not enlarge default emojis`})
        }

        if (!emoji.startsWith('https')) {
            return await interaction.reply({content: `You can not enlarge default emojis`})
        }

        const embed = new EmbedBuilder()
            .setColor('DarkOrange')
            .setDescription(':white_check_mark: **Your emoji has been enlarged**')
            .setImage(emoji)
            .setTimestamp()
            .setFooter({ text: `Emoji Enlarger` })

        await interaction.reply({ embeds: [embed] });
    }

}