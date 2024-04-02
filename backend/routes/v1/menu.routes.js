const express = require('express')
const router = express.Router();
const { createMenu, getMenu, upadteMenu, deleteMenu } = require('../../controllers/menu.controller');
const authMiddleWare = require('../../middlewares/adminMiddleware');
const cookieJwtAuth = require('../../middlewares/cookieJwtAuth');

router.route('/').get(getMenu);
router.route('/create').post(cookieJwtAuth, authMiddleWare, createMenu);
router.route('/delete/:menuId').delete(cookieJwtAuth, authMiddleWare, deleteMenu);
router.route('/update/:menuId').patch(cookieJwtAuth, authMiddleWare, upadteMenu);

module.exports =  router;