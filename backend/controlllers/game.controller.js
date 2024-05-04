const { Game } = require("../models/game.model");

const createGame = async (req, res) => {
  const { name, description, skills, difficulties } = req.body;

  try {
    const createdGame = await Game.create({
      name,
      description,
      skills,
      difficulties,
    });

    return res.status(200).json(createdGame);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const deleteGameById = async (req, res) => {
    
};

module.exports = {
  createGame,
};
