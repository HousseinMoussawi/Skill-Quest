const { Game } = require("../models/game.model");
const { Level } = require("../models/level.model");
const { ADVANCED } = require("../utils/LEVEL_DIFFICULTY_ENUM");

const addLevelToGameById = async (req, res) => {
  const { id } = req.params;

  const { level } = req.body;

  try {
    const game = await Game.findById(id);

    const newLevel = await Level.create(level);

    game.push(newLevel);

    await game.save();

    return res.status(200).send("Level created successfully!");
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
};
