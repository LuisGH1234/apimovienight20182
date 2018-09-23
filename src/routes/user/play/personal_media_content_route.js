const express = require('express');
const router = express.Router();

const personalmediaController = require('../../../controllers/user/play/personal_media_content_controller');

router.get('/get/:personal_playlist_id', personalmediaController.getPersonalMediaContent);
router.post('/add', personalmediaController.addPersonalMediaContent);
router.delete('/delete/:id', personalmediaController.deletePersonalMediaContent);

module.exports = router;