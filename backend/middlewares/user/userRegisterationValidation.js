const { userRegisterationSchema } = require("../../auth/schemas/user.schema");

const userRegisterationValidation = (req, res, next) => {
  try {
    const { success, data } = userRegisterationSchema.safeParse(req.body);
    console.log(data);
    if (!success) {
      return res.status(400).json({
        error: "Invalid Request body",
      });
    }
    req.validatedData = data;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
};

module.exports = userRegisterationValidation;
