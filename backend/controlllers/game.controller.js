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
  const { id } = req.params;

  try {
    await Game.findByIdAndDelete(id);

    return Response(204).send("Game deleted successfully");
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();

    return res.status(200).json(games);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

module.exports = {
  createGame,
  deleteGameById,
  getAllGames,
};
