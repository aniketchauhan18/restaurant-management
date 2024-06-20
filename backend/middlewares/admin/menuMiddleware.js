const { menuValidationSchema } = require("../../auth/schemas/menu.schema");
const {
  InternalServerError,
  InvalidRequestBody,
} = require("../../utils/errorResponse");

const menuRegisterationValidation = (req, res, next) => {
  try {
    const { success, data } = menuValidationSchema.safeParse(req.body);

    req.menuValidatedData = data;

    if (!success) return InvalidRequestBody(res);
    next();
  } catch (err) {
    return InternalServerError(res);
  }
};

module.exports = menuRegisterationValidation;
