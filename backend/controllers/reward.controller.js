const { Reward } = require("../models/reward.model");

const createReward = async (req, res) => {
  const { name, imageURL, type, price } = req.body;

  try {
    const createdReward = await Reward.create({
      name,
      imageURL,
      type,
      price,
    });

    return res.status(200).json(createdReward);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getRewardById = async (req, res) => {
  const { id } = req.params;

  try {
    const reward = await Reward.findById(id);

    return res.status(200).json(reward);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const updateRewardById = async (req, res) => {
  const { id } = req.params;

  const { name, imageURL, type, price } = req.body;

  try {
    const updatedReward = await Reward.findByIdAndUpdate(id, {
      name,
      imageURL,
      type,
      price,
    });
    return res.status(200).json(updatedReward);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

module.exports = {
  createReward,
  getRewardById,
  updateRewardById,
};
