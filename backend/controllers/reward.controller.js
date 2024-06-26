const { Reward } = require("../models/reward.model");
const { User } = require("../models/user.model");

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
    return res.status(500).send(`Internal server error!: ${e}`);
  }
};  
const getAllRewards = async (req, res) => {
  try {
    const rewards = await Reward.find();

    return res.status(200).json(rewards);
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

const getUserRewardsById = async (req,res) => {
  const {userId} = req.params

  try {
    const user = await User.findById(userId)

    const rewards = user.userRewards

    return res.status(200).json(rewards)
    
  } catch (e) {
    return res.status(500).send(`Internal server error: ${e}`)
  }
}

const updateRewardById = async (req, res) => {
  const { id } = req.params;

  const { name, imageURL, type, price } = req.body;

  try {
    const updatedReward = await Reward.findByIdAndUpdate(id, {
      name,
      imageURL,
      type,
      price,
    },
{
    new:true
});

    return res.status(200).json(updatedReward);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const deleteRewardById = async (req, res) => {
  const { id } = req.params;

  try {
    await Reward.findByIdAndDelete(id);

    return res.status(200).send("Reward deleted successfully!");
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};
 
const buyRewardById = async (req, res) => {
  const { userId, rewardId } = req.params;

  try {
    const user = await User.findById(userId);
    const reward = await Reward.findById(rewardId);

    if (!user) {
      return res.status(404).send('User not found');
    }

    if (!reward) {
      return res.status(404).send('Reward not found');
    }

    if (user.balance < reward.price) {
      return res.status(403).send('Not enough balance');
    }

    user.userRewards.push({
      reward_id: reward._id,
      reward_image_url: reward.imageURL,
      reward_name: reward.name,
      reward_type: reward.type,
    });

    user.balance -= reward.price;
    await user.save();

    return res.status(200).send('Reward bought successfully!');
  } catch (e) {
    console.error('Error buying reward:', e);
    return res.status(500).send(`Internal server error: ${e.message}`);
  }
};


module.exports = {
  createReward,
  getAllRewards,
  getRewardById,
  updateRewardById,
  deleteRewardById,
  buyRewardById,
  getUserRewardsById,
};
