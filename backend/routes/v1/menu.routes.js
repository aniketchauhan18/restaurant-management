const express = require('express')
const router = express.Router();
const { createMenu, getMenu, upadteMenu, deleteMenu } = require('../../controllers/menu.controller');
const authMiddleWare = require('../../middlewares/adminMiddleware');
const jwtAuth = require('../../middlewares/jwtAuth')

router.route('/').get(getMenu);
router.route('/create').post(jwtAuth, authMiddleWare, createMenu);
router.route('/delete/:menuId').delete(jwtAuth, authMiddleWare, deleteMenu);
router.route('/update/:menuId').patch(jwtAuth, authMiddleWare, upadteMenu);

module.exports =  router;