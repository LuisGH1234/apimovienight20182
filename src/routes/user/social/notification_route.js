const express = require('express');
const router = express.Router();

const notificationController = require('../../../controllers/user/social/notification_controller');

router.get('/get/:reciever_id', notificationController.listNotification);
router.post('/add', notificationController.addNotification);
router.delete('/delete/:id', notificationController.deleteNotification);

module.exports = router;