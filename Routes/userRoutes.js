const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController.js');
const { isLoggedIn, isLoggedOut } = require('../controllers/authController');

const validateRegistration = require('../middlewares/validator').validateRegistration;
const validateLogin = require('../middlewares/validator').validateLogin;



router.get('/Login', isLoggedOut, userController.getUserLogin);

router.post('/Login', isLoggedOut, validateLogin, userController.postUserLogin);


router.get('/Signup', isLoggedOut, validateRegistration, userController.getUserCreate);

router.post('/Signup', isLoggedOut, userController.postUserCreate);

router.get('/logout', isLoggedIn, userController.getUserLogout);


module.exports = router