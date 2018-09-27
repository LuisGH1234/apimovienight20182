const express = require('express');
const router = express.Router();

const userController = require('../../controllers/user/user_controller');
const personalMediaContentController = require('../../controllers/user/play/personal_media_content_controller');
const personalPlaylistController = require('../../controllers/user/play/personal_playlist_controller');
const friendController = require('../../controllers/user/social/friend_controller');
const notificationController = require('../../controllers/user/social/notification_controller');

router.get('/getusers', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.addUser);
router.post('/getuser', userController.getUser2);

router.get('/own_title/:personal_playlist_id', personalMediaContentController.getPersonalMediaContent);
router.post('/own_title', personalMediaContentController.addPersonalMediaContent);
router.delete('/own_title/:id', personalMediaContentController.deletePersonalMediaContent);

router.get('/own_play/:user_id', personalPlaylistController.getPersonalPlaylist);
router.post('/own_play', personalPlaylistController.addPersonalPlayList);
router.delete('/own_play/:id', personalPlaylistController.deletePersonalPlaylist);
router.put('/own_play/:id', personalPlaylistController.updatePersonalPlaylist);

router.get('/friend/:user_id', friendController.getFriends);
router.post('/friend', friendController.addFriend);
router.delete('/friend/:id', friendController.deleteFriend);
router.put('/friend/:id', friendController.updateFriendConfirmed);

router.get('/notification/:reciever_id', notificationController.listNotification);
router.post('/notification', notificationController.addNotification);
router.delete('/notification/:id', notificationController.deleteNotification);

module.exports = router;