const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      default: 0,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
