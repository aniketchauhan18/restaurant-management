const zod = require("zod");

const userRegisterationSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string().optional(),
  email: zod.string(),
  password: zod.string(),
  role: zod.string(),
});

const userLoginSchema = zod.object({
  email: zod.string(),
  password: zod.string(),
});

module.exports = {
  userRegisterationSchema,
  userLoginSchema,
};
