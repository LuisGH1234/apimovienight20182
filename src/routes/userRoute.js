const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

router.get('/listusers', userController.listUsersJSON);
router.get('/listfriend', userController.listFriendJSON);
router.get('/listnotification', userController.listNotificationJSON);

router.post('/addfriend', userController.addFriend);
router.post('/addnotification', userController.addNotification);

router.delete('/deletefriend', userController.deleteFriend);
router.delete('/deletenotification', userController.deleteNotification);

//router.put('/update', userController.updateJSON);

module.exports = router;