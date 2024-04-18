const express = require('express')
const router = express.Router();
const { register, deleteRestaurant, updateRestaurant, getRestaurant, getRestaurantById } = require('../../controllers/restaurant.controller');
const adminMiddleWare = require('../../middlewares/adminMiddleware');
const jwtAuth = require('../../middlewares/jwtAuth');

router.route('/').get(getRestaurant);
router.route('/register').post(jwtAuth, adminMiddleWare, register);
router.route('/admin/:id').get(getRestaurantById);
router.route('/update/:restaurantId').patch(jwtAuth, adminMiddleWare, updateRestaurant);
router.route('/delete/:restaurantId').delete( jwtAuth, adminMiddleWare, deleteRestaurant );

module.exports = router;