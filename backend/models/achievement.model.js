const mongoose = require('mongoose');



const achievementSchema = new mongoose.Schema({
  name: String,
  description: String,
  achievementMedalURL: String,
  
});

const Achievement = mongoose.model('Achievement', achievementSchema);

module.exports = {Achievement, achievementSchema};