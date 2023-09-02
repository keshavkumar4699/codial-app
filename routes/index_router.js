const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.use('/user', require('./users_router.js'));
router.use('/posts', require('./post_router.js'));
router.use('/comments', require('./comment_router.js'));

module.exports = router;