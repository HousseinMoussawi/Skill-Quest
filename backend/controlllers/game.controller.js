const Game = require('../models/game.model')

const createGame = async (req, res) => {
    try{
        const createdGame = await Game.c

    }catch(e){
        return res.status(500).send('Internal server error!:',e)
    }
}