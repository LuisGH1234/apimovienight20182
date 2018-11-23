const express = require('express');
const auth = require('../../middlewares/auth');
const usersign = require('../../controllers/auth');
const router = express.Router();

const userController = require('../../controllers/user/user_controller');
const personalMediaContentController = require('../../controllers/user/play/personal_media_content_controller');
const personalPlaylistController = require('../../controllers/user/play/personal_playlist_controller');
const friendController = require('../../controllers/user/social/friend_controller');
const notificationController = require('../../controllers/user/social/notification_controller');

const eventController = require('../../controllers/event/event_controller');
const responsabilityController = require('../../controllers/event/participant_event/responsability_controller');
const medi_contentController = require('../../controllers/event/play/media_content_controller');
const playlistController = require('../../controllers/event/play/playlist_controller');
const snackController = require('../../controllers/event/snack/snack_controller');
const snacklistController = require('../../controllers/event/snack/snacklist_controller');

router.get('/dev', (req, res) => {
    res.json({ active: 'true' });
});

router.get('/users', userController.getUsers);
router.get('/users/:id', auth.isAuth, userController.getUser);
router.put('/users/:id', auth.isAuth, userController.updateUser);

router.get('/home/users/:id', auth.isAuth, userController.getHome);

router.post('/signup', usersign.signUp);
router.post('/signin', usersign.singIn);

router.get('/users/:user_id/personal_playlists/:p_play_id/personal_media_contents', auth.isAuth, personalMediaContentController.getPersonalMediaContents);
router.post('/personal_media_contents', auth.isAuth, personalMediaContentController.addPersonalMediaContent);
router.delete('/personal_media_contents/:id', auth.isAuth, personalMediaContentController.deletePersonalMediaContent);

router.get('/users/:user_id/personal_playlists', auth.isAuth, personalPlaylistController.getPersonalPlaylist);
router.post('/personal_playlists', auth.isAuth, personalPlaylistController.addPersonalPlayList);
router.delete('/personal_playlists/:id', auth.isAuth, personalPlaylistController.deletePersonalPlaylist);
router.put('/personal_playlists/:id', auth.isAuth, personalPlaylistController.updatePersonalPlaylist);

router.get('/users/:user_id/friendships', auth.isAuth, friendController.getFriends);
router.post('/friendships', auth.isAuth, friendController.addFriend);
router.delete('/friendships/:id', auth.isAuth, friendController.deleteFriend);
router.put('/friendships/:id', auth.isAuth, friendController.updateFriendConfirmed);

router.get('/users/:user_id/notifications', auth.isAuth, notificationController.listNotification); //user_id = reciever_id
router.post('/notifications', auth.isAuth, notificationController.addNotification);
router.delete('/notifications/:id', auth.isAuth, notificationController.deleteNotification);

////

router.get('/users/:user_id/events', auth.isAuth, eventController.getEventsByUser);
router.post('/events', auth.isAuth, eventController.addEvent);
router.delete('/events/:id', auth.isAuth, eventController.deleteEvent);
router.put('/events/:id', auth.isAuth, eventController.updateEvent);

router.post('/participants', auth.isAuth, eventController.addParticipantToEvent);

router.get('/events/:event_id/responsibilities', auth.isAuth, responsabilityController.getResponsabilitiesByEvent);
router.get('/users/:user_id/responsibilities', auth.isAuth, responsabilityController.getResponsabilitiesByUser);
router.get('/users/:user_id/events/:event_id/responsibilities', auth.isAuth, responsabilityController.getResponsabilitiesByUserByEvent);
router.post('/responsibilities', auth.isAuth, responsabilityController.addResponsabilityByEvent);
router.delete('/responsibilities/:id', auth.isAuth, responsabilityController.deleteResponsability);

router.get('/events/:event_id/playlists/:playlist_id/media_contents', auth.isAuth, medi_contentController.getMediaContentsByPlaylist);
router.post('/media_contents', auth.isAuth, medi_contentController.addMediaContent);
router.delete('/media_contents/:id', auth.isAuth, medi_contentController.deleteMediaContent);

router.get('/events/:event_id/playlists', auth.isAuth, playlistController.getPlaylistsByEvent);
router.post('/playlists', auth.isAuth, playlistController.addPlaylistByEvent);
router.delete('/playlists/:id', auth.isAuth, playlistController.deletePlaylist);
router.put('/playlists/:id', auth.isAuth, playlistController.updatePlaylist);

router.get('/events/:event_id/snacklists/:snacklist_id/snacks', auth.isAuth, snackController.getSnacksBySnacklist);
router.post('/snacks', auth.isAuth, snackController.addSnack);
router.delete('/snacks/:id', auth.isAuth, snackController.deleteSnack);

router.get('/events/:event_id/snacklists', auth.isAuth, snacklistController.getSnacklistByEvent);
router.post('/snacklists', auth.isAuth, snacklistController.addSnacklistByEvent);
router.delete('/snacklists/:id', auth.isAuth, snacklistController.deleteSnacklist);
router.put('/snacklists/:id', auth.isAuth, snacklistController.updateSnacklist);


module.exports = router;