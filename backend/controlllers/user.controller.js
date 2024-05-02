const { User } = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    return res.json(user);
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
    return res.json(updatedUser);
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
    return res.json(createdUser);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};
