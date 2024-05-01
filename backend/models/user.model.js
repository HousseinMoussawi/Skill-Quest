const mongoose = require("mongoose");
const USER_ROLES = require("../utils/USER_ROLES_ENUM");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
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
  
  password:{
    type: String,
    require: 'Password isrequired',
  },

  profilePictureURL:{
    type:String,
    
  },

  role:{
    type: String,
    enum: [USER_ROLES.ADMIN,USER_ROLES.CREATOR,USER_ROLES.PLAYER],
    default: USER_ROLES.PLAYER,
  }
});
