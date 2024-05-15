const { Game } = require("../models/game.model");
const { Level } = require("../models/level.model");
const { ADVANCED } = require("../utils/LEVEL_DIFFICULTY_ENUM");
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); 
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  }
});

const addLevelToGameById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send("No game ID");
    }

    const { text, difficulty } = req.body;
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

    const backgroundImageURL = `http://localhost:3001/uploads/${req.file.filename}`;

    const game = await Game.findById(id);
    if(!game)
      return res.status(400).send('no game')

    const newLevel = new Level({
      text: JSON.parse(text),
      difficulty,
      backgroundImageURL,
    });

    await newLevel.save();

    game.levels.push(newLevel);

    await game.save();

    return res.status(200).send("Level created successfully!").json(game);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getGameLevelById = async (req, res) => {
  const { id } = req.params;

  try {
    const level = await Level.findById(id);

    return res.status(200).json(level);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getAllGameLevelsById = async (req, res) => {
  const { id } = req.params;

  try {
    const game = await Game.findById(id);

    const gameLevels = game.levels;

    return res.status(200).json(gameLevels);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const updateGameLevelById = async (req, res) => {
  const { gameId, levelId } = req.params;

  const { level } = req.body;

  try {
    const game = await Game.findById(gameId);

    const levelIndex = game.levels.findIndex(
      (level) => level._id.toString() === levelId
    );

    game.levels[levelIndex] = level;

    return res.status(200).json(game.levels[levelIndex]);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const deleteGameLevelById = async (req, res) => {
  const { gameId, leveId } = req.params;

  try {
    const game = await Game.findById(gameId);

    const levelIndex = game.levels.findIndex(
      (level) => level._id.toString() === leveId
    );

    game.levels.splice(levelIndex, 1);

    await game.save();

    return res.status(200).send("Level deleted successfully!");
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

module.exports = {
  addLevelToGameById,
  getGameLevelById,
  getAllGameLevelsById,
  updateGameLevelById,
  deleteGameLevelById,
  storage,
};
