const restaurantValidationSchema = require("../../auth/schemas/restaurant.schema");
const { InternalServerError } = require("../../utils/errorResponse");

const restaurantRegisterationValidation = (req, res, next) => {
  try {
    const { success, data } = restaurantValidationSchema.safeParse(req.body);
    req.validatedData = data;
    if (!success) return InvalidRequestBody(res);
    next();
  } catch (err) {
    console.log(";;;;;;;;;;;;");
    return InternalServerError(res);
  }
};

module.exports = restaurantRegisterationValidation;
