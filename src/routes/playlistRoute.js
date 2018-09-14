const express = require('express');
const router = express.Router();

const playlistController = require('../controllers/playlistController');

router.get('/listpersonalplaylist', playlistController.listPersonalPlaylistJSON);
router.get('/listpersonalmediacontent', playlistController.listPersonalMediaContentJSON);

router.post('/addpersonalplaylist', playlistController.savePersonalPlayList);
router.post('/addpersonalmediacontent', playlistController.savePersonalMediContent);

router.delete('/deletepersonalplaylist', playlistController.deletePersonalPlaylist);
router.delete('/deletepersonalmediacontent', playlistController.deletePersonalMediaContent);

//router.put('/update', playlistController.updateJSON);

module.exports = router;