const express = require('express');
const router = express.Router();
const loginController = require('../controllers/LoginController');
router.use('/user', loginController.loginUser);

module.exports = router;
