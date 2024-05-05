const express = require("express");

const {
  createReward,
  getAllRewards,
  getRewardById,
  updateRewardById,
  deleteRewardById,
} = require("../controllers/reward.controller");

const adminMiddleware = require("../middlewares/admin.middleware");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", authMiddleware, adminMiddleware, createReward);
router.get("/:id", authMiddleware, getRewardById);
router.get("/", authMiddleware, getAllRewards);
router.put("/:id", authMiddleware, adminMiddleware, updateRewardById);
router.delete("/:id", authMiddleware, adminMiddleware, deleteRewardById);

module.exports = router;
