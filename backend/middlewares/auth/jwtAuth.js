const jwt = require("jsonwebtoken");

const jwtAuth = (req, res, next) => {
  // token from
  try {
    const bearer = req.headers.authorization;

    if (!bearer) {
      return res.status(400).json({
        message: "Not Authourized",
      });
    }

    console.log(bearer);
    const [b, token] = bearer.split(" ");
    console.log(b);
    if (!token) {
      return res.status(401).json({
        message: "Token not found",
      });
    }

    const user = jwt.verify(token, process.env.SECRET_KEY);
    if (!user) {
      return res.status(401).json({
        error: "Unauthorized access",
      });
    }
    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "error inside jwt",
    });
  }
};

module.exports = jwtAuth;
