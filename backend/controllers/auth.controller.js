const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");

const register = async (req, res) => {
  const { email, password, username, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(401).send("User already exist");

    const createdUser = await User.create({
      email,
      role,
      username,
      password,
    });
    return res.status(201).json(createdUser);
  } catch (e) {
    console.log("Internal server error: ", e);
    return res.status(500).send("Internal server error");
  }
};

const login = async (req, res) => {
  const { email, password: plainTextPassword } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send("Incorrect email/passowrd");

    const isValidPassword = user.comparePassword(plainTextPassword);
    if (!isValidPassword)
      return res.status(401).send("Incorrect email/passowrd");

    const { password, ...userWithoutPassword } = user.toJSON();
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

    res.status(200).json({
      user: userWithoutPassword,
      token,
    });
  } catch (e) {
    console.log("Internal server error: ", e);
    return res.status(500).send("Internal server error");
  }
};

module.exports = {
  register,
  login,
};