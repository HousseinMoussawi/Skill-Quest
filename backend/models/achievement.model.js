const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  game_id: mongoose.Schema.Types.ObjectId,
  game_name: String,
  game_description: String,
})

const achievementSchema = new mongoose.Schema({
  name: String,
  description: String,
  achievementMedalURL: String,
  game: {
    type: gameSchema,
  }
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = {Achievement, achievementSchema};