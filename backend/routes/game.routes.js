const express = require("express");
const multer = require("multer");

const {
  
  createGame,
  deleteGameById,
  getAllGames,
  updateGameById,
  getGameById,
} = require("../controllers/game.controller");

const {
  storage,
  addLevelToGameById,
  getGameLevelById,
  getAllGameLevelsById,
  updateGameLevelById,
  deleteGameLevelById,
} = require("../controllers/level.controller");

const adminMiddleware = require("../middlewares/admin.middleware");
const authMiddleware = require("../middlewares/auth.middleware");
const creatorMiddleware = require("../middlewares/creator.middleware");

const router = express.Router();

const upload = multer({ storage: storage });

router.post("/", authMiddleware, creatorMiddleware, createGame);
router.delete("/:id", authMiddleware, creatorMiddleware, deleteGameById);
router.get("/", authMiddleware, getAllGames);
router.put("/:id", authMiddleware, creatorMiddleware, updateGameById);
router.get("/:id", authMiddleware, getGameById);

router.post(
  "/level/:id",
  authMiddleware,
  upload.single('image'),
  creatorMiddleware,
  addLevelToGameById
);
router.get("/level/:id", authMiddleware, getGameLevelById);
router.get(
  "/:id/levels",
  authMiddleware,
  creatorMiddleware,
  getAllGameLevelsById
);
router.put(
  "/:gameId/level/:levelId",
  authMiddleware,
  adminMiddleware,
  updateGameLevelById
);
router.delete(
  "/:gameId/level/:levelId",
  authMiddleware,
  adminMiddleware,
  deleteGameLevelById
);

module.exports = router;
