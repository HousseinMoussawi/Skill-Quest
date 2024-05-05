const express = require('express')
const {
    getAllAchievementsById,
    getAllUsers,
    getTopAchievementsById,
    getUserById,
    updateUserById,
    createUser,
    deleteUserById,
    getAllUserGamesById,
    getAllUsersByRole,
    getUserBalanceById,
    getCreatorGamesCountById,
    getCreatorsWithGamesCount,
    getPlayerGamesProgressById,
  } = require('../controllers/user.controller')

const {buyRewardById} = require('../controllers/reward.controller')

const authMiddleware = require('../middlewares/auth.middleware')  
const adminMiddleware = require('../middlewares/admin.middleware')
const playerMiddleware = require('../middlewares/player.middleware')
const creatorMiddleware = require('../middlewares/creator.middleware')
const router = express.Router()

router.get('/achievements/:id',authMiddleware, getAllAchievementsById)
router.get('/',adminMiddleware,getAllUsers)
router.get('/topAchievements/:id',authMiddleware,getTopAchievementsById)
router.get('/:id',authMiddleware, playerMiddleware, getUserById)
router.put('/:id', authMiddleware, updateUserById)
router.post('/',authMiddleware, adminMiddleware, createUser)
router.delete('/:id', authMiddleware, adminMiddleware, deleteUserById)
router.get('/games/:id',authMiddleware, playerMiddleware, getAllUserGamesById)
router.get('/:role',authMiddleware, adminMiddleware,getAllUsersByRole)
router.get('/balance/:id',authMiddleware,getUserBalanceById)
router.get('/gamesCount/:id',authMiddleware, creatorMiddleware, getCreatorGamesCountById)
router.get('/creators',authMiddleware,getCreatorsWithGamesCount)
router.get('/gameProgress/:id',authMiddleware,playerMiddleware,getPlayerGamesProgressById)
router.post('/:userId/buyReward/:rewardId',authMiddleware,buyRewardById)

module.exports = router