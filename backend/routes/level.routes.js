const express = require('express')

const {addLevelToGameById,
    getGameLevelById,
    getAllGameLevelsById,
    updateGameLevelById,
    deleteGameLevelById,} = require('../controllers/level.controller')

const adminMiddleware = require('../middlewares/admin.middleware')
const authMiddleware = require('../middlewares/auth.middleware')
const creatorMiddleware = require('../middlewares/creator.middleware')

const router = express.Router()

router.post('/games/:id/levels',authMiddleware,creatorMiddleware,addLevelToGameById)
router.get('/games/levels/:id',authMiddleware,getGameLevelById)
router.get('/games/:id/levels',authMiddleware,creatorMiddleware,getAllGameLevelsById)
router.put('/games/:gameId/levels/:levelId',authMiddleware,adminMiddleware,updateGameLevelById)
router.delete('/games/:gameId/levels/:levelId',authMiddleware,adminMiddleware,deleteGameLevelById)

module.exports = router