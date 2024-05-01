const mongoose = require('mongoose')

const levelStatSchema = new mongoose.Schema({
    name: String,
    value: String,
})

const LevelStat = mongoose.model('LevelStat', levelStatSchema)

module.exports = { LevelStat, levelStatSchema}