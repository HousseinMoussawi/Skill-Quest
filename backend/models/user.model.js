const mongoose = require("mongoose");
const USER_ROLES = require("../utils/USER_ROLES_ENUM");
const bcrypt = require("bcrypt");
const REWARD_TYPES = require("../utils/REWARD_TYPES_ENUM");
const LEVEL_DIFFICULTY = require("../utils/LEVEL_DIFFICULTY_ENUM");
const LEVEL_STATUS = require("../utils/LEVEL_STATUS_ENUM");

const skillSchema = new mongoose.Schema({
  name: String,
});

const levelStatSchema = new mongoose.Schema({
  level_stat_id: mongoose.Schema.Types.ObjectId,
  stat_name: String,
  stat_value: String,
});

const gameLevelSchema = new mongoose.Schema({
  level_id: mongoose.Schema.Types.ObjectId,
  level_name: String,

  level_difficulty: {
    type: String,
    enum: [
      LEVEL_DIFFICULTY.BEGINNER,
      LEVEL_DIFFICULTY.INTERMEDIATE,
      LEVEL_DIFFICULTY.ADVANCED,
      LEVEL_DIFFICULTY.PROFESSIONAL,
    ],
    default: LEVEL_DIFFICULTY.BEGINNER,
  },

  level_status: {
    type: String,
    enum: [LEVEL_STATUS.COMPLETE, LEVEL_STATUS.UNLOCKED, LEVEL_STATUS.LOCKED],
    default: LEVEL_STATUS.UNLOCKED,
  },

  level_stats: {
    type: [levelStatSchema],
    default: [],
  },
});

const gameStatSchema = new mongoose.Schema({
  game_stat_id: mongoose.Schema.Types.ObjectId,
  stat_name: String,
  stat_value: String,
});

const userGameSchema = new mongoose.Schema({
  game_name: String,

  game_stats: {
    type: [gameStatSchema],
    default: [],
  },
  game_levels: {
    type: [gameLevelSchema],
    default: [],
  },
});

const rewardSchema = new mongoose.Schema({
  reward_id: mongoose.Schema.Types.ObjectId,
  reward_name: String,
  reward_image_url: String,

  reward_type: {
    type: String,
    enum: [REWARD_TYPES.THEME, REWARD_TYPES.BACKGROUND, REWARD_TYPES.EMOJI],
  },
});

const gameSchema = new mongoose.Schema({
  game_id: mongoose.Schema.Types.ObjectId,
  game_name: String,
});

const achievementSchema = new mongoose.Schema({
  achievement_id: mongoose.Schema.Types.ObjectId,
  achievement_name: String,
  achievement_description: String,
  achievement_medal_url: String,

  achievement_game: {
    type: gameSchema,
  },
});

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,

      validate: {
        validator: function (value) {
          return /\w+\s+\w+/.test(value);
        },
        message: "the full name '{VALUE}' is not a valid full name",
      },
    },

    username: {
      type: String,
      require: "Username is required",
      unique: true,
    },

    email: {
      type: String,
      require: "Email is required",
      unique: true,
    },

    password: {
      type: String,
      require: "Password isrequired",
    },

    profilePictureURL: {
      type: String,
    },

    role: {
      type: String,
      enum: [USER_ROLES.ADMIN, USER_ROLES.CREATOR, USER_ROLES.PLAYER],
      default: USER_ROLES.PLAYER,
    },

    user_achievements: {
      type: [achievementSchema],
      default: [],
    },

    user_rewards: {
      type: [rewardSchema],
      default: [],
    },

    skills: {
      type: [skillSchema],
      default: [],
    },

    favorite_game: {
      type: gameSchema,
    },

    user_games: {
      type: [userGameSchema],
      default: [],
    },

    balance: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  return next();
});

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};
const User = mongoose.model("User", userSchema);

module.exports = { User, userSchema };
