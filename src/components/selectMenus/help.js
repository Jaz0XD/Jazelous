module.exports = {
    data: {
        name: `help`
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `${interaction.values[0]}`
        });
    },
};