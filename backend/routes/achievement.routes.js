const express = require("express");

const{createAchievement,
    getAllAchievements,
    updateAchievementById,
    deleteAchievementById,} = require('../controllers/achievement.controller')

const adminMiddleware = require('../middlewares/admin.middleware')
const playerMiddleware = require('../middlewares/player.middleware')
const authMiddleware = require('../middlewares/auth.middleware')
const creatorMiddleware = require('../middlewares/creator.middleware')

const router = express.Router()

router.post('/',authMiddleware,adminMiddleware,createAchievement)
router.get('/',authMiddleware,getAllAchievements)
router.put('/:id',authMiddleware,adminMiddleware,updateAchievementById)
router.delete('/:id',authMiddleware,adminMiddleware,deleteAchievementById)

module.exports = router