const zod = require("zod");

const restaurantValidationSchema = zod.object({
  name: zod.string(),
  country: zod.string(),
  state: zod.string(),
  city: zod.string(),
  address: zod.string(),
  description: zod.string(),
  number: zod.string(),
  email: zod.string(),
  websiteURL: zod.string(),
  imageUrls: zod.array(zod.string()).optional(),
});

module.exports = restaurantValidationSchema;
