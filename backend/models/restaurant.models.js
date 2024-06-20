const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    number: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    websiteURL: {
      type: String,
    },
    imageUrls: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
);

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
module.exports = Restaurant;
