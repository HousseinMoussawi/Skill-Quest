const mongoose = require("mongoose");
const Level = require("./level.model");
const DIFFICULTIES = require("../utils/LEVEL_DIFFICULTY_ENUM");



const skillSchema = new mongoose.Schema({
  name: String,
});

const gameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: "Game name is required",
    },

    description: {
      type: String,
      require: "Game description is required",
    },
 
    gameImageURL: {
      type: String,
      default: "",
    },

    gameBackgroundURL: {
      type: String,
      default: "",
    },

    gameScreenShotsURL: {
      type:[String],
      default:[],
    },

    skills: {
      type: [skillSchema],
      default: [],
    },

    levels: {
      type: [Level.levelSchema],
      default:[],
    },


    difficulties: {
      type: [
        {
          type: String,
          enum: Object.values(DIFFICULTIES),
        },
        
      ],
      default:[],
    },
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = { Game, gameSchema };
