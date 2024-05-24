const express = require('express')
const router = express.Router();
const { createMenu, getMenu, updateMenu, deleteMenu } = require('../../controllers/menu.controller');
const authMiddleWare = require('../../middlewares/admin/adminMiddleware');
const jwtAuth = require('../../middlewares/auth/jwtAuth');
const menuRegisterationValidation = require('../../middlewares/admin/menuMiddleware');

router.route('/:restaurantId').get(getMenu);
router.route('/create/:restaurantId').post(jwtAuth, authMiddleWare, menuRegisterationValidation ,createMenu);
router.route('/delete/:menuId').delete(jwtAuth, authMiddleWare, deleteMenu);
router.route('/update/:menuId').patch(jwtAuth, authMiddleWare, updateMenu); //http://localhost:3000/api/v1/menus/update/${menuId}`

module.exports =  router;