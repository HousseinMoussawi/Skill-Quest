const { User } = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const updateUserById = async (req, res) => {
  const { id } = req.params;

  const { email, fullName, favoriteGame, username, skills, profilePictureURL } =
    req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        email,
        fullName,
        favoriteGame,
        username,
        skills,
        profilePictureURL,
      },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (e) {
    return res.status(500).send("Internal serve error!:", e);
  }
};

const createUser = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const createdUser = await User.create({
      email,
      username,
      password,
    });

    return res.status(200).json(createdUser);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);

    return res.status(204).send("User deleted successfully");
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getTopAchievementsById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    const achievements = user.user_achievements;

    const achievementsArray = Object.entries(achievements);

    const shuffledAchievements = achievementsArray.sort(
      () => Math.random() - 0.5
    );

    const topAchievements = shuffledAchievements.slice(0, 4);

    const topAchievementsObject = Object.fromEntries(topAchievements);

    return res.status(200).json(topAchievementsObject);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getAllAchievementsById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    const achievements = user.userAchievements;

    return res.status(200).json(achievements);
  } catch (e) {
    console.log("Internal server error: ", e);
    return res.status(500).send("Internal server error!:", e);
  }
};

const getAllUserGamesById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    const games = user.userGames;

    return res.stats(200).json(games);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getAllUsersByRole = async (req, res) => {
  const { role } = req.params;

  try {
    const users = await User.find({ role: role });

    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getUserBalanceById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    const balance = user.balance;

    return res.status(200).json(balance);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getCreatorGamesCountById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    const gamesCount = user.userGames.length;

    return res.status(200).json(gamesCount);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

module.exports = {
  getAllAchievementsById,
  getAllUsers,
  getTopAchievementsById,
  getUserById,
  updateUserById,
  createUser,
  deleteUserById,
  getAllUserGamesById,
  getAllUsersByRole,
  getUserBalanceById,
  getCreatorGamesCountById,
};
