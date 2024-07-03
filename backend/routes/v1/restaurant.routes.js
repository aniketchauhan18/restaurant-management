const express = require("express");
const router = express.Router();
const {
  register,
  deleteRestaurant,
  updateRestaurant,
  getRestaurant,
  getRestaurantById,
  getRestaurantByUserId,
  getRestaurantWithPagenation,
} = require("../../controllers/restaurant.controller");
const adminMiddleWare = require("../../middlewares/admin/adminMiddleware");
const jwtAuth = require("../../middlewares/auth/jwtAuth");
const restaurantRegisterationValidation = require("../../middlewares/admin/restaurantMiddleware");

router.route("/").get(getRestaurantWithPagenation);
router
  .route("/register")
  .post(jwtAuth, adminMiddleWare, restaurantRegisterationValidation, register);
router.route("/user/:id").get(getRestaurantByUserId);
router.route("/:id").get(getRestaurantById);
router
  .route("/update/:restaurantId")
  .patch(jwtAuth, adminMiddleWare, updateRestaurant);
router
  .route("/delete/:restaurantId")
  .delete(jwtAuth, adminMiddleWare, deleteRestaurant);

module.exports = router;
