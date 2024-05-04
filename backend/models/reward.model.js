const mongoose = require('mongoose')
const REWARD_TYPES = require('../utils/REWARD_TYPES_ENUM')

const rewardSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
    },

    image_url:{
        type: String,
        unique: true,
    },

    type:{
        type: String,
        enum :Object.values(REWARD_TYPES),
        default: '',
    },

    price:{
        type: Number,
        default:0,
    }
})

const Reward = mongoose.model('Reward',rewardSchema)

module.exports = {Reward, rewardSchema}