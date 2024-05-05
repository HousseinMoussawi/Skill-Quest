const { Game } = require("../models/game.model");
const { Level } = require("../models/level.model");

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

module.exports = {
  addLevelToGameById,
};
