const { userLoginSchema } = require('../../auth/schemas/user.schema')

const userLoginValidation = (req, res, next) => {
  try {
    const { success, data } = userLoginSchema.safeParse(req.body)
    console.log(data)
    if(!success) {
      return res.status(400).json({
        error: "Invalid Request body"
      })
    }
    req.validatedData = data
    next()
  } catch(err) {
    console.log(err)
  }
};

module.exports = userLoginValidation;