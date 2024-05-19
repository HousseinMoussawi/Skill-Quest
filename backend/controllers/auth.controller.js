const jwt = require("jsonwebtoken");
const { User } = require("../models/user.model");
const { hashSync } = require("bcrypt");
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  const { email, password, username, role } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(401).send("a user with this email already exist");

    const existingUserByUsername = await User.findOne({ username });
    if (existingUserByUsername) return res.status(401).send("a user with this username already exist");

    console.log(password);
    const hashedPassword = await hashSync(password, 10);

    const createdUser = await User.create({
      email,
      role,
      username,
      password: hashedPassword,
    });

    await createdUser.save();
    return res.status(201).json(createdUser);
  } catch (e) {
    console.log("Internal server error: ", e);
    return res.status(500).send("Internal server error");
  }
};

const login = async (req, res) => {
  const { email, password: plainTextPassword, role } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).send("Incorrect email/passowrd");

    const isValidPassword = await bcrypt.compare(plainTextPassword,user.password)
    if (!isValidPassword)
      return res.status(401).send("Incorrect email/passowrd");

    const userRole = user.role;
    
    if (role !== userRole) {
      return res
        .status(401)
        .send(`You are a ${userRole} trying to login as a ${role}`);
    }

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
