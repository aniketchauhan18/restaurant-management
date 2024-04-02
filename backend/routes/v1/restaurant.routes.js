const express = require('express')
const router = express.Router();
const { register, deleteRestaurant, updateRestaurant, getRestaurant } = require('../../controllers/restaurant.controller');
const adminMiddleWare = require('../../middlewares/adminMiddleware');
const cookieJwtAuth = require('../../middlewares/cookieJwtAuth');

router.route('/').get(getRestaurant);
router.route('/register').post(cookieJwtAuth, adminMiddleWare, register);
router.route('/update/:restaurantId').patch(cookieJwtAuth, adminMiddleWare, updateRestaurant);
router.route('/delete/:restaurantId').delete( cookieJwtAuth, adminMiddleWare, deleteRestaurant );

module.exports = router;