const {
    SlashCommandBuilder,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    AttachmentBuilder,
} = require("discord.js");

const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
    apiKey: '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'
});

const openai = new OpenAIApi(configuration);

module.exports = {
    data: new SlashCommandBuilder()
        .setName("image-generate")
        .setDescription("This generates an image using a prompt provided by you")
        .addStringOption(option => option.setName('prompt').setDescription(`Describe what image you want to generate`).setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply();

        const prompt = interaction.options.getString('prompt');

        try {
            const response = await openai.createImage({
                prompt: `${prompt}`,
                n: 1,
                size: `1024x1024`,
            });

            const image = response.data.data[0].url;

            const embed = new EmbedBuilder()
                .setColor("DarkOrange")
                .setTitle(`Heres your image of a \'\'\'${prompt}\'\'\'`)
                .setImage(image)
                .setTimestamp()
                .setFooter({ text: `Image Generator` })

            await interaction.editReply({ embeds: [embed] });
        } catch (e) {
            if (e.response.status == 400) return await interaction.editReply({ content: `I cannot generate that image - status code **400**` })
            return await interaction.editReply({ content: `Request failed with status code **${e.response.status}**` });
            console.log(e);
        }
    }
}