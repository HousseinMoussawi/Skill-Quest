const express = require("express");
const { connect } = require("./configs/mongoDB.config");
const cors = require('cors');
const userRouter = require("./routes/user.routes");
const authRouter = require("./routes/auth.routes");
const gameRouter = require("./routes/game.routes");
const rewardRouter = require("./routes/reward.routes");
const achievementRouter = require('./routes/achievement.routes');
const skillRouter = require('./routes/skill.routes');

require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use("/users", userRouter);

app.use("/auth", authRouter);

app.use("/games", gameRouter);

app.use("/rewards", rewardRouter);

app.use('/achievements', achievementRouter);

app.use('/skills', skillRouter);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
  connect();
});
