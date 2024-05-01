const mongoose = require("mongoose");
const USER_ROLES = require("../utils/USER_ROLES_ENUM");
const bcrypt = require("bcrypt");
const REWARD_TYPES = require('../utils/REWARD_TYPES_ENUM')


const gameStatSchema = new mongoose.Schema({
  game_stat_id: mongoose.Schema.types.ObjectId,
  stat_name: String,
  stat_value: String,
})

const rewardSchema = new mongoose.Schema({
  reward_id: mongoose.Schema.types.ObjectId,
  reward_name: String,
  reward_image_url: String,
  reward_type: {
    type: String,
    enum: [REWARD_TYPES.THEME,REWARD_TYPES.BACKGROUND,REWARD_TYPES.EMOJI]
  }
})

const userGameSchema = new mongoose.Schema({
  game_name: String,
  stats:{
    type: [gameStatSchema],
    default: [],
  },
})

const gameSchema = new mongoose.Schema({
  game_id: mongoose.Schema.types.ObjectId,
  game_name: String,
})

const achievementSchema = new mongoose.Schema({
  achievement_id: mongoose.Schema.types.ObjectId,
  achievement_name: String,
  achievement_description: String,
  achievement_medal_url: String,
  game:{
    type: gameSchema,
  }
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

    achievements: {
      type: [achievementSchema],
      default:[],
    },

    rewards:{
      type: [rewardSchema],
      default:[]
    },

    games:{
      type: [userGameSchema],
      default: [],
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
