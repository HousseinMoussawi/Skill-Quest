const { User } = require("../models/user.model");

const getAllUsers = (req, res) => {
  try {
    const users = User.find();
    return res.json(users);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

const getUserById = (req, res) => {
  const { id } = req.params;

  try {
    const user = User.findById(id);
    return res.json(user);
  } catch (e) {
    return res.status(500).send("Internal server error!:", e);
  }
};

