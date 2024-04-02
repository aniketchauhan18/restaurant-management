const zod = require('zod')

const restaurantValidationSchema = zod.object({
  name: zod.string(),
  country: zod.string(),
  state: zod.string(),
  city: zod.string(),
  address: zod.string(),
  description: zod.string(),
  number: zod.number(),
  email: zod.string(),
  websiteURL: zod.string()
})

module.exports = restaurantValidationSchema;