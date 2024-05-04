const express = require("express");
const { connect } = require("./configs/mongoDB.config");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
app.use(express.json());

const userRouter = require("./routes/user.routes");
app.use("/users", userRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const gameRouter = require('./routes/game.routes')
app.use('/games', gameRouter)

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is running on port ${port}`);
  connect();
});