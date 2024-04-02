const zod = require('zod')

const menuValidationSchema = zod.object({
  name: zod.string(),
  price: zod.string(),
  description: zod.string()
});

// const menuUpdationSchema = zod.object({
//   name: zod.string().optional(),
//   price: zod.string().optional(),
//   description: zod.string().optional()
// })

module.exports = {
  menuValidationSchema,
  // menuUpdationSchema
}