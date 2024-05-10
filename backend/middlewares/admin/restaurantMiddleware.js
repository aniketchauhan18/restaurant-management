const restaurantValidationSchema = require('../../auth/schemas/restaurant.schema')

const restaurantRegisterationValidation = (req, res, next) => {
  try {
    const { success, data } = restaurantValidationSchema.safeParse
    req.validatedData = data
    (req.body)
    if (!success) {
      return res.status(400).json({
        error: "Invalid req body"
      })
    }
    next()
  } catch (err) {
    res.status(500).json({error: "Internal server error"})
  }
}

module.exports = restaurantRegisterationValidation    