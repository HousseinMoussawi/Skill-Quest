const mongoose = require("mongoose");
const Level = require("./level.model");
const GameStat = require("./gameStat.model");

const creatorSchema = new mongoose.Schema({
  creator_id: mongoose.Schema.Types.ObjectId,
  creator_username: String,
  creator_picture_url: String,
});

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

    game_image_url: {
      type: String,
      default: "",
    },

    game_background_url: {
      type: String,
      default: "",
    },

    skills: {
      type: [skillSchema],
      default: [],
    },

    creator: {
      type: creatorSchema,
      default: {
        creator_id: 1,
        creator_username: "Official",
        creator_picture_url: "",
      },
    },

    levels: {
      type: [Level.levelSchema],
    },

    stats: {
      type: [GameStat.gameStatSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Game = mongoose.model("Game", gameSchema);

module.exports = { Game, gameSchema };
