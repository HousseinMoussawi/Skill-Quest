const { Game } = require("../models/game.model");

const createGame = async (req, res) => {
  const {
    name,
    description,
    skills,
    difficulties,
    gameImageURL,
    gameBackgroundURL,
  } = req.body;

  try {
    const createdGame = await Game.create({
      name,
      description,
      skills,
      difficulties,
      gameImageURL,
      gameBackgroundURL,
    });

    return res.status(200).json(createdGame);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Internal server error!");
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

const updateGameById = async (req, res) => {
  const { id } = req.params;

  const {
    name,
    description,
    skills,
    difficulties,
    gameImageURL,
    gameBackgroundURL,
  } = req.body;

  try {
    const updatedGame = await Game.findByIdAndUpdate(
      id,
      {
        name,
        description,
        skills,
        difficulties,
        gameImageURL,
        gameBackgroundURL,
      },
      {
        new: true,
      }
    );

    return res.status(200).json(updatedGame);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getGameById = async (req, res) => {
  const { id } = req.params;

  try {
    const game = await Game.findById(id);

    return res.status(200).json(game);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

module.exports = {
  createGame,
  deleteGameById,
  getAllGames,
  updateGameById,
  getGameById,
};
