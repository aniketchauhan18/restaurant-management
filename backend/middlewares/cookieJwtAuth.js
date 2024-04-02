const jwt = require('jsonwebtoken');

const cookieJwtAuth = (req, res, next) => {
   // token from cookie
  const token = req.cookies.token;
  try{
    const user = jwt.verify(token, process.env.SECRET_KEY);
    if (!user) {
      return res.status(401).json({
        error: "Unauthourized access"
      })
    }
    req.user = user;
    next()
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      error: "error inside jwt cookie"
    })
  }
}

module.exports = cookieJwtAuth;