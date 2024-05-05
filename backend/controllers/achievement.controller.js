const { Achievement } = require("../models/achievement.model");
const { Game } = require("../models/game.model");

const createAchievement = async (req, res) => {
  const { name, descriprion, achievementMedalURL } = req.body;

  const { id } = req.params;

  try {
    const game = await Game.findById(id);

    const createdAchievement = await Achievement.create({
      name,
      descriprion,
      achievementMedalURL,
      game: {
        game_id: game._id,
        game_description: game.description,
        game_name: game.name,
      },
    });

    return res.status(200).json(createdAchievement);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getAllAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find();

    return res.status(200).json(achievements);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const updateAchievementById = async (req, res) => {
  const { id } = req.params;

  const { name, descriprion, achievementMedalURL } = req.body;

  try {
    const updatedAchievement = await Achievement.findByIdAndUpdate(id, {
      name,
      descriprion,
      achievementMedalURL,
    });

    return res.status(200).json(updatedAchievement)
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

module.exports = {
  createAchievement,
  getAllAchievements,
  updateAchievementById,
};
