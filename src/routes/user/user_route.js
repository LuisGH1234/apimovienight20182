const express = require('express');
const router = express.Router();

const userController = require('../../controllers/user/user_controller');

router.get('/getusers', userController.getUsers);
router.get('/getuser/:id', userController.getUser);

module.exports = router;