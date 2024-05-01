const mongoose = require("mongoose");

const gameStatSchema = new mongoose.Schema({
  name: String,
  value: String,
});

const GameStat = mongoose.model("GameStat", gameStatSchema);

module.exports = { GameStat, gameStatSchema };
