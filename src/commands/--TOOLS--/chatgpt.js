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
    //apiKey: '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'
    apiKey: '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'
});

const openai = new OpenAIApi(configuration);

module.exports = {
    data: new SlashCommandBuilder()
        .setName("chatgpt")
        .setDescription("Ask ChatGPT a question")
        .addStringOption(option => option.setName('question').setDescription(`This is going to be the question for ChatGPT`).setRequired(true)),
    async execute(interaction) {
        await interaction.deferReply();

        const question = interaction.options.getString('question');

        try {
            const res = await openai.createCompletion({
                model: 'text-davinci-003',
                max_tokens: 2048,
                temperature: 0.5,
                prompt: question
            });

            

            const embed = new EmbedBuilder()
                .setColor("DarkOrange")
                .setTitle(`Heres your image of a \'\'\'${prompt}\'\'\'`)
                .setDescription(`\'\'\'${res.data.choices[0].text}\'\'\'`)
                .setTimestamp()
                .setFooter({ text: `ChatGPT` })

            await interaction.editReply({ embeds: [embed] });
        } catch (e) {
            return await interaction.editReply({ contents: `request faailed with status code **${e.response.status}**`})
        }
    }
}