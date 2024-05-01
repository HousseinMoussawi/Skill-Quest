const mongoose = require('mongoose')
const creator = require('./user.model')


const gameSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: 'Game name is required',
        },

        description:{
            type: String,
            require: 'Game description is required',
        },

        game_image_url:{
            type: String,
            default: '',
        },

        game_background_url:{
            type: String ,
            default: '',
        },

        creator:{
            creator_id: mongoose.Schema.Types.ObjectId,
            creator_picture_url: String,
        },
    },
    {
        timestamps: true
    }
)

