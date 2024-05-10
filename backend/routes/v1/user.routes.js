const express = require('express')
const router = express.Router();
const { register, login } = require('../../controllers/user.controller')
const userRegisterationValidation = require('../../middlewares/user/userRegisterationValidation');
const userLoginValidation = require('../../middlewares/user/userLoginValidation');

router.route('/register').post(userRegisterationValidation, register);
router.route('/login').post(userLoginValidation, login);

module.exports = router;