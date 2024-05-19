const {
  getAllUsers,
  getUserById,
  updateUserById,
  createUser,
  deleteUserById,
  getTopAchievementsById,
  getAllAchievementsById,
  getAllUserGamesById,
  getAllUsersByRole,
  getUserBalanceById,
  getCreatorGamesCountById,
  getCreatorsWithGamesCount,
  getPlayerGamesProgressById,
  authorize,
} = require("../controllers/user.controller.js");

const { User } = require("../models/user.model");
const USER_ROLES = require("../utils/USER_ROLES_ENUM");

jest.mock("../models/user.model");

describe("User Controller", () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, body: {}, file: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("getAllUsers should return all users", async () => {
    User.find.mockResolvedValue([{ _id: 1, email: "test@test.com" }]);

    await getAllUsers(req, res);

    expect(User.find).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ _id: 1, email: "test@test.com" }]);
  });

  test("getUserById should return a user by id", async () => {
    req.params.id = "1";
    User.findById.mockResolvedValue({ _id: 1, email: "test@test.com" });

    await getUserById(req, res);

    expect(User.findById).toHaveBeenCalledWith("1");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ _id: 1, email: "test@test.com" });
  });

  test("updateUserById should update a user by id", async () => {
    req.params.id = "1";
    req.body = { email: "updated@test.com", fullName: "Updated Name", username: "updatedUser", skills: JSON.stringify(["skill1"]) };
    req.file = { filename: "profile.jpg" };
    const updatedUser = { _id: 1, email: "updated@test.com", fullName: "Updated Name", username: "updatedUser", skills: ["skill1"], profilePictureURL: "http://localhost:3001/uploads/profile.jpg" };
    User.findByIdAndUpdate.mockResolvedValue(updatedUser);

    await updateUserById(req, res);

    expect(User.findByIdAndUpdate).toHaveBeenCalledWith(
      "1",
      {
        email: "updated@test.com",
        fullName: "Updated Name",
        username: "updatedUser",
        skills: ["skill1"],
        profilePictureURL: "http://localhost:3001/uploads/profile.jpg",
      },
      { new: true }
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(updatedUser);
  });

  test("createUser should create a new user", async () => {
    req.body = { email: "new@test.com", username: "newUser", password: "password123" };
    const createdUser = { _id: 1, email: "new@test.com", username: "newUser", password: "password123" };
    User.create.mockResolvedValue(createdUser);

    await createUser(req, res);

    expect(User.create).toHaveBeenCalledWith({
      email: "new@test.com",
      username: "newUser",
      password: "password123",
    });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(createdUser);
  });

  test("deleteUserById should delete a user by id", async () => {
    req.params.id = "1";
    User.findByIdAndDelete.mockResolvedValue({});

    await deleteUserById(req, res);

    expect(User.findByIdAndDelete).toHaveBeenCalledWith("1");
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalledWith("User deleted successfully");
  });

  

  test("getAllAchievementsById should return all achievements", async () => {
    req.params.id = "1";
    const user = { userAchievements: ["ach1", "ach2", "ach3"] };
    User.findById.mockResolvedValue(user);

    await getAllAchievementsById(req, res);

    expect(User.findById).toHaveBeenCalledWith("1");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(["ach1", "ach2", "ach3"]);
  });

  test("getAllUserGamesById should return all user games", async () => {
    req.params.id = "1";
    const user = { userGames: ["game1", "game2", "game3"] };
    User.findById.mockResolvedValue(user);

    await getAllUserGamesById(req, res);

    expect(User.findById).toHaveBeenCalledWith("1");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(["game1", "game2", "game3"]);
  });

  test("getAllUsersByRole should return users by role", async () => {
    req.params.role = "ADMIN";
    User.find.mockResolvedValue([{ _id: 1, role: "ADMIN" }]);

    await getAllUsersByRole(req, res);

    expect(User.find).toHaveBeenCalledWith({ role: "ADMIN" });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ _id: 1, role: "ADMIN" }]);
  });

  test("getUserBalanceById should return user balance", async () => {
    req.params.id = "1";
    const user = { balance: 100 };
    User.findById.mockResolvedValue(user);

    await getUserBalanceById(req, res);

    expect(User.findById).toHaveBeenCalledWith("1");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(100);
  });

  test("getCreatorGamesCountById should return creator's games count", async () => {
    req.params.id = "1";
    const user = { userGames: ["game1", "game2"] };
    User.findById.mockResolvedValue(user);

    await getCreatorGamesCountById(req, res);

    expect(User.findById).toHaveBeenCalledWith("1");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(2);
  });

  test("getCreatorsWithGamesCount should return creators with games count", async () => {
    User.find.mockResolvedValue([{ _id: 1, role: USER_ROLES.CREATOR, userGames: ["game1", "game2"] }]);

    await getCreatorsWithGamesCount(req, res);

    expect(User.find).toHaveBeenCalledWith({ role: USER_ROLES.CREATOR });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ _id: 1, role: USER_ROLES.CREATOR, userGames: ["game1", "game2"] }]);
  });

  test("getPlayerGamesProgressById should return player's games progress", async () => {
    req.params.id = "1";
    const user = {
      userGames: [
        {
          game_name: "game1",
          game_stats: "stats1",
          game_levels: [
            { level_name: "level1", level_difficulty: "easy" },
            { level_name: "level2", level_difficulty: "hard" },
          ],
        },
      ],
    };
    User.findById.mockResolvedValue(user);

    await getPlayerGamesProgressById(req, res);

    expect(User.findById).toHaveBeenCalledWith("1");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      {
        name: "game1",
        stats: "stats1",
        levels: [
          { name: "level1", difficulty: "easy" },
          { name: "level2", difficulty: "hard" },
        ],
      },
    ]);
  });

  test("authorize should return authorized", async () => {
    await authorize(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith("authorized");
  });
});