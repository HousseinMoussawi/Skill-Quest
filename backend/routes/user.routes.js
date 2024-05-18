const express = require('express')
const multer = require('multer')

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
    authorize
  } = require('../controllers/user.controller')
 
const {buyRewardById,getUserRewardsById} = require('../controllers/reward.controller')
const {storage} = require('../controllers/level.controller')

const authMiddleware = require('../middlewares/auth.middleware')  
const adminMiddleware = require('../middlewares/admin.middleware')
const playerMiddleware = require('../middlewares/player.middleware')
const creatorMiddleware = require('../middlewares/creator.middleware')
const router = express.Router()

const upload = multer({storage:storage})

router.get('/:userId/rewards',authMiddleware,getUserRewardsById)
router.get('/authorize',authMiddleware,authorize)
router.get('/achievements/:id',authMiddleware, getAllAchievementsById)
router.get('/',authMiddleware,getAllUsers)
router.get('/topAchievements/:id',authMiddleware,getTopAchievementsById)
router.get('/:id',authMiddleware, playerMiddleware, getUserById)
router.put('/:id', authMiddleware, upload.single('image'), updateUserById)
router.post('/',authMiddleware, upload.single('image'), adminMiddleware, createUser)
router.delete('/:id', authMiddleware, adminMiddleware, deleteUserById)
router.get('/games/:id',authMiddleware, playerMiddleware, getAllUserGamesById)
router.get('/:role',authMiddleware, adminMiddleware,getAllUsersByRole)
router.get('/balance/:id',authMiddleware,getUserBalanceById)
router.get('/gamesCount/:id',authMiddleware, creatorMiddleware, getCreatorGamesCountById)
router.get('/creators',authMiddleware,getCreatorsWithGamesCount)
router.get('/gameProgress/:id',authMiddleware,playerMiddleware,getPlayerGamesProgressById)
router.post('/:userId/buyReward/:rewardId',authMiddleware,buyRewardById)

module.exports = router      