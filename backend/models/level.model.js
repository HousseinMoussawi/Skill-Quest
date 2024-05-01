const mongoose = require("mongoose");
const LEVEL_DIFFICULTY = require("../utils/LEVEL_DIFFICULTY_ENUM");
const LEVEL_STATUS = require("../utils/LEVEL_STATUS_ENUM");
const levelStat = require("./levelStats");

const levelSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "New Level",
  },

  description: {
    type: String,
    default: "",
  },

  difficulty: {
    type: String,
    enum: [
      LEVEL_DIFFICULTY.BEGINNER,
      LEVEL_DIFFICULTY.INTERMEDIATE,
      LEVEL_DIFFICULTY.ADVANCED,
      LEVEL_DIFFICULTY.PROFESSIONAL,
    ],
    default: LEVEL_DIFFICULTY.BEGINNER,
  },

  status: {
    type: String,
    enum: [LEVEL_STATUS.COMPLETE, LEVEL_STATUS.UNLOCKED, LEVEL_STATUS.LOCKED],
    default: LEVEL_STATUS.UNLOCKED,
  },

  stats: {
    type: [levelStat.levelStatSchema],
  },

  reward: Number,
});

const Level = mongoose.model("Level", levelSchema);

module.exports = { Level, levelSchema };
