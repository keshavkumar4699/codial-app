const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller');

router.get('/user_profile/', userController.login);

module.exports = router;