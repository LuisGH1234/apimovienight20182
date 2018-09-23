const express = require('express');
const router = express.Router();

const friendController = require("../../../controllers/user/social/friend_controller");

router.get('/get/:user_id', friendController.getFriends);
router.post('/add', friendController.addFriend);
router.delete('/delete/:id', friendController.deleteFriend);
router.put('/update/:id', friendController.updateFriendConfirmed);

module.exports = router;