const express = require("express");

const {
    createReward,
  getRewardById,
  updateRewardById,
  deleteRewardById,
} = require('../controllers/reward.controller')

const adminMiddleware = require('../middlewares/admin.middleware')
const playerMiddleware = require('../middlewares/player.middleware')
const authMiddleware = require('../middlewares/auth.middleware')
const creatorMiddleware = require('../middlewares/creator.middleware')

const router = express.Router()

router.post('/',authMiddleware,adminMiddleware,createReward)
router.get('/:id',)

module.exports = router