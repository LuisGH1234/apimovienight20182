const express = require('express');
const router = express.Router();

const eventController = require('../../controllers/event/event_controller');
const responsabilityController = require('../../controllers/event/participant_event/responsability_controller');
const medi_contentController = require('../../controllers/event/play/media_content_controller');
const playlistController = require('../../controllers/event/play/playlist_controller');
const snackController = require('../../controllers/event/snack/snack_controller');
const snacklistController = require('../../controllers/event/snack/snacklist_controller');

router.get('/:user_id', eventController.getEventsByUser);
router.post('/', eventController.addEvent);
router.delete('/:id', eventController.deleteEvent);
router.put('/:id', eventController.updateEvent);

router.post('/participant', eventController.addParticipantToEvent);

router.get('/responsability_by_event/:event_id',responsabilityController.getResponsabilitiesByEvent);
router.get('/responsability_by_user/:user_id', responsabilityController.getResponsabilitiesByUser);
router.post('/responsability', responsabilityController.addResponsabilityByEvent);
router.delete('/responsability/:id', responsabilityController.deleteResponsability);

router.get('/media_content/:playlist_id', medi_contentController.getMediaContentsByPlaylist);
router.delete('/media_content/:id', medi_contentController.deleteMediaContent);
router.post('/media_content', medi_contentController.addMediaContent);

router.get('/playlist/:event_id', playlistController.getPlaylistByEvent);
router.post('/playlist', playlistController.addPlaylistByEvent);
router.delete('/playlist/:id', playlistController.deletePlaylist);
router.put('/playlist/:id', playlistController.updatePlaylist);

router.get('/snack/:snacklist_id', snackController.getSnacksBySnacklist);
router.post('/snack', snackController.addSnack);
router.delete('/snack/:id', snackController.deleteSnack);

router.get('/snacklists/:event_id', snacklistController.getSnacklistByEvent);
router.post('/snacklists', snacklistController.addSnacklistByEvent);
router.delete('/snacklists/:id', snacklistController.deleteSnacklist);
router.put('/snacklists/:id', snacklistController.updateSnacklist);

module.exports = router;