const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  achievement_name: String,
  achievement_description: String,
  achievement_date: Date,
  achievement_medal_url: String,
  game: {
    game_id: mongoose.Schema.Types.ObjectId,
    game_name: String,
    game_description: String,
  }
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = Achievement;