const { User } = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (e) {
    return res.status(500).send("Internal server error!");
  }
};

