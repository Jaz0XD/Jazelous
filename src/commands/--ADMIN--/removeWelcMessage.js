const {
    SlashCommandBuilder,
    EmbedBuilder,
    PermissionsBitField,
} = require("discord.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
    data: new SlashCommandBuilder()
        .setName("removewelchannel")
        .setDescription("This disables welcome message"),
        
    async execute(interaction) {
        if (
            !interaction.member.permissions.has(
                PermissionsBitField.Flags.Administrator
            )
        )
            return await interaction.reply({
                content: `You must have Administrator permissions to disable welcome messages`,
            });

       
        const embed = new EmbedBuilder()
            .setColor("Orange")
            .setDescription(
                `:white_check_mark: Your welcome channel has been removed`
            );

        await db.delete(`welchannel_${interaction.guild.id}`);
        await interaction.reply({ embeds: [embed] });
    },
};
