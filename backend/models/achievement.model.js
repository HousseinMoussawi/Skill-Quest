const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  achievement_name: String,
  achievement_description: String,
  achievement_date: Date,
  achievement_medal_url: String,
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' } // Reference to the Game model
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;