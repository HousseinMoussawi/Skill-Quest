const express = require("express");

const {
  createGame,
  deleteGameById,
  getAllGames,
  updateGameById,
  getGameById,
} = require("../controlllers/game.controller");

const adminMiddleware = require('../middlewares/admin.middleware')
const playerMiddleware = require('../middlewares/player.middleware')
const authMiddleware = require('../middlewares/auth.middleware')
const creatorMiddleware = require('../middlewares/creator.middleware')

const router = express.Router()

router.post('/',authMiddleware, creatorMiddleware,createGame)
router.delete('/:id',authMiddleware,creatorMiddleware,deleteGameById)
router.get('/',authMiddleware,getAllGames)
router.put('/:id',authMiddleware,creatorMiddleware, updateGameById)
router.get('/:id',authMiddleware,getGameById)

module.exports = router