const { User } = require("../models/user.model");
const USER_ROLES = require("../utils/USER_ROLES_ENUM");

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
  
  try {
    const { id } = req.params;

  const { email, fullName, username, skills } =
    req.body;

    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

    const profilePictureURL = `http://localhost:3001/uploads/${req.file.filename}`;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        email,
        fullName,
        username,
        skills:JSON.parse(skills),
        profilePictureURL,
      },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (e) {
    return res.status(500).send(`Internal serve error!:${e}`);
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

    const shuffledAchievements = achievements.sort(() => Math.random() - 0.5);

    const topAchievements = shuffledAchievements.slice(0, 4);

    return res.status(200).json(topAchievements);
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

    if(!games)
      return res.status(400).send('User has no games')

    return res.status(200).json(games);
  } catch (e) {
    return res.status(500).send(`Internal server error!: ${e}` );
  }
};

const getAllUsersByRole = async (req, res) => {
  const { role } = req.params;

  try {
    const users = await User.find({
      role: typeof role === "string" ? role.toUpperCase() : role,
    });

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

const getCreatorsWithGamesCount = async (req, res) => {
  try {
    const creators = await User.find({role:USER_ROLES.CREATOR})

    console.log(creators)

    return res.status(200).json(creators);
  } catch (e) {
    return res.status(500).send("Internal server error!",e);
  }
};
  
const getPlayerGamesProgressById = async (req, res) => {
  const { id } = req.params;
 
  try {
    const user = await User.findById(id);

    const userGamesWithLevels = user.userGames.map((game) => ({
      name: game.game_name,
      stats: game.game_stats,
      levels: game.game_levels.map((level) => ({
        name: level.level_name,
        difficulty: level.level_difficulty,
      })),
    }));
 
    return res.status(200).json(userGamesWithLevels);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
}; 

const authorize = async (req, res) => {
  
  return res.status(200).send('authorized')
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
  getCreatorsWithGamesCount,
  getPlayerGamesProgressById,
  authorize,
};
