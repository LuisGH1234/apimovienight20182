const express = require('express');
const router = express.Router();

const playlistController = require('../../../controllers/user/play/personal_playlist_controller');

router.get('/get/:user_id', playlistController.getPersonalPlaylist);
router.post('/add', playlistController.addPersonalPlayList);
router.delete('/delete', playlistController.deletePersonalPlaylist);
router.put('/update/:id', playlistController.updatePersonalPlaylist);

module.exports = router;