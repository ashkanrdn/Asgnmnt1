const express = require('express');
const router = express.Router();
const userController = require('../Controllers/UserController.js');
const { isLoggedIn, isLoggedOut } = require('../controllers/authController');


router.get('/create', isLoggedOut, userController.getUserCreate);

router.post('/', isLoggedOut, userController.postUserCreate);

router.get('/login', isLoggedOut, userController.getUserLogin);

router.post('/login', isLoggedOut, userController.postUserLogin);

router.get('/profile', isLoggedIn, userController.getUserProfile);

router.get('/logout', isLoggedIn, userController.getUserLogout);

module.exports = router;