const USER_ROLES = require("../utils/USER_ROLES_ENUM");

const creatorMiddleware = (req, res, next) => {
  try {
    if (
      req.user.role === USER_ROLES.CREATOR ||
      req.user.role === USER_ROLES.ADMIN
    )
      return next();
    return res.status(401).send("Unauthorized");
  } catch (e) {
    console.log("Internal server error: ", e);
    return res.status(500).send("Internal server error.");
  }
};

module.exports = creatorMiddleware;
