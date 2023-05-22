const { Schema, model } = require("mongoose");
const balanceSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userId: String,
  guildName: String,
  balance: { type: Number, default: 0 },
});

module.exports = model("Balance", balanceSchema, "balances");
