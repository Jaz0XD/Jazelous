// const { SlashCommandBuilder, Embedbuilder } = require("discord.js");
// const Balance = require("../../schemas/balance");

// module.exports = {
//   data: new SlashCommandBuilder()
//     .setName("pay")
//     .setDescription("Pay a user an amoount stated")
//     .addUserOption((option) =>
//       option
//         .setName("target")
//         .setDescription("The user you'd like to view the balance of")
//         .setRequired(true)
//     )
//     .addNumberOption((option) =>
//       option
//         .setName("amount")
//         .setDescription("The amount you would like to send")
//         .setRequired(true)
//     ),

//   async execute(interaction, client) {
//     const userStoredBalance = await client.fetchBalance(
//       interaction.user.id,
//       interaction.guild.id
//     );
//     const amount = interaction.options.getNumber("amount");
//     const selectedUser = interaction.options.getUser("target");

//     if (selectedUser.bot || selectedUser.id == interaction.user.id)
//       return await interaction.reply({
//         content: `You can not send money to yourself or a bot`,
//         ephemeral: true,
//       });
//     else if (amount < 1.0)
//       return await interaction.reply({
//         content: "The amount stated must be over $0.99",
//         ephemeral: true,
//       });
//     else if (amount > userStoredBalance.amount)
//       return await interaction.reply({
//         content: `You do not have enough funds to send that amount`,
//         ephemeral: true,
//       });

//     const selectedUserBalance = await client.fetchBalance(
//       selectedUser.id,
//       interaction.guild.id
//     );
//     amount = await client.toFixedNumber(amount);

//     await Balance.findOneAndUpdate(
//       { _id: userStoredBalance._id },
//       {
//         balance: await client.toFixedNumber(userStoredBalance.balance - amount),
//       }
//     );

//     await Balance.findOneAndUpdate(
//       { _id: selectedUserBalance._id },
//       {
//         balance: await client.toFixedNumber(
//           selectedUserBalance.balance + amount
//         ),
//       }
//     );

//     await interaction.reply({
//       content: `You've sent $${amount} to ${selectedUser}`,
//     });
//   },
// };

const { SlashCommandBuilder } = require("discord.js");
const Balance = require("../../schemas/balance");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pay")
    .setDescription("Pay a user an amount stated")
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("The user you'd like to view the balance of")
        .setRequired(true)
    )
    .addNumberOption((option) =>
      option
        .setName("amount")
        .setDescription("The amount you would like to send")
        .setRequired(true)
    ),

  async execute(interaction, client) {
    const userStoredBalance = await client.fetchBalance(
      interaction.user.id,
      interaction.guild.id
    );
    const amount = interaction.options.getNumber("amount");
    const selectedUser = interaction.options.getUser("target");

    if (selectedUser.bot || selectedUser.id == interaction.user.id)
      return await interaction.reply({
        content: `You cannot send money to yourself or a bot`,
        ephemeral: true,
      });
    else if (amount < 1.0)
      return await interaction.reply({
        content: "The amount stated must be at least $1.0",
        ephemeral: true,
      });
    else if (amount > userStoredBalance.amount)
      return await interaction.reply({
        content: `You do not have enough funds to send that amount`,
        ephemeral: true,
      });

    const selectedUserBalance = await client.fetchBalance(
      selectedUser.id,
      interaction.guild.id
    );
    const updatedAmount = await client.toFixedNumber(amount);

    await Balance.findOneAndUpdate(
      { _id: userStoredBalance._id },
      {
        balance: await client.toFixedNumber(
          userStoredBalance.balance - updatedAmount
        ),
      }
    );

    await Balance.findOneAndUpdate(
      { _id: selectedUserBalance._id },
      {
        balance: await client.toFixedNumber(
          selectedUserBalance.balance + updatedAmount
        ),
      }
    );

    await interaction.reply({
      content: `You've sent $${updatedAmount} to ${selectedUser}`,
    });
  },
};
