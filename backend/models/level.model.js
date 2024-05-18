const mongoose = require("mongoose");
const LEVEL_DIFFICULTY = require("../utils/LEVEL_DIFFICULTY_ENUM");
const LEVEL_STATUS = require("../utils/LEVEL_STATUS_ENUM");

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
    enum: Object.values(LEVEL_DIFFICULTY),

    default: LEVEL_DIFFICULTY.BEGINNER,
  },

  text:{
    type:[String],
    default :[]
  },

  backgroundImageURL:{
    type:String,
    default:'',
  },

  status: {
    type: String,
    enum: Object.values(LEVEL_STATUS),
    default: LEVEL_STATUS.UNLOCKED,
  },
  score:String,

  highscore:String,


  reward: Number,
});

const Level = mongoose.model("Level", levelSchema);

module.exports = { Level, levelSchema };
