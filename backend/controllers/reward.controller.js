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

module.exports = {
  createReward,
};
