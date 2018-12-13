const express = require('express');
const auth = require('../middlewares/auth');
const usersign = require('../controllers/auth');
const router = express.Router();

const userController = require('../controllers/user/user_controller');
const personalMediaContentController = require('../controllers/user/play/personal_media_content_controller');
const personalPlaylistController = require('../controllers/user/play/personal_playlist_controller');
const friendController = require('../controllers/user/social/friend_controller');
const notificationController = require('../controllers/user/social/notification_controller');

const eventController = require('../controllers/event/event_controller');
const responsabilityController = require('../controllers/event/participant_event/responsability_controller');
const medi_contentController = require('../controllers/event/play/media_content_controller');
const playlistController = require('../controllers/event/play/playlist_controller');
const snackController = require('../controllers/event/snack/snack_controller');
const snacklistController = require('../controllers/event/snack/snacklist_controller');

//Los middlewares se ejecutan de forma sequencial
router.use(auth.isAuth); //Primero en ejecutarse
router.use('/users', (_, res, next) => { //Segundo en ejecutarse
    //Para colocar un header en la rutas que comiencen con /users
    res.set('Rol','user');
    next();
});

router.post('/signup', usersign.signUp);
router.post('/signin', usersign.singIn);

router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);

router.get('/home/users/:id', userController.getHome);

router.get('/users/:user_id/personal_playlists/:p_play_id/personal_media_contents', personalMediaContentController.getPersonalMediaContents);
router.post('/personal_media_contents', personalMediaContentController.addPersonalMediaContent);
router.delete('/personal_media_contents/:id', personalMediaContentController.deletePersonalMediaContent);

router.get('/users/:user_id/personal_playlists', personalPlaylistController.getPersonalPlaylist);
router.post('/personal_playlists', personalPlaylistController.addPersonalPlayList);
router.delete('/personal_playlists/:id', personalPlaylistController.deletePersonalPlaylist);
router.put('/personal_playlists/:id', personalPlaylistController.updatePersonalPlaylist);

router.get('/users/:user_id/friendships', friendController.getFriends);
router.post('/friendships', friendController.addFriend);
router.delete('/friendships/:id', friendController.deleteFriend);
router.put('/friendships/:id', friendController.updateFriendConfirmed);

router.get('/users/:user_id/notifications', notificationController.listNotification); //user_id = reciever_id
router.post('/notifications', notificationController.addNotification);
router.delete('/notifications/:id', notificationController.deleteNotification);

////

router.get('/users/:user_id/events', eventController.getEventsByUser);
router.post('/events', eventController.addEvent);
router.delete('/events/:id', eventController.deleteEvent);
router.put('/events/:id', eventController.updateEvent);

router.post('/participants', eventController.addParticipantToEvent);

router.get('/events/:event_id/responsibilities', responsabilityController.getResponsabilitiesByEvent);
router.get('/users/:user_id/responsibilities', responsabilityController.getResponsabilitiesByUser);
router.get('/users/:user_id/events/:event_id/responsibilities', responsabilityController.getResponsabilitiesByUserByEvent);
router.post('/responsibilities', responsabilityController.addResponsabilityByEvent);
router.delete('/responsibilities/:id', responsabilityController.deleteResponsability);

router.get('/events/:event_id/playlists/:playlist_id/media_contents', medi_contentController.getMediaContentsByPlaylist);
router.post('/media_contents', medi_contentController.addMediaContent);
router.delete('/media_contents/:id', medi_contentController.deleteMediaContent);

router.get('/events/:event_id/playlists', playlistController.getPlaylistsByEvent);
router.post('/playlists', playlistController.addPlaylistByEvent);
router.delete('/playlists/:id', playlistController.deletePlaylist);
router.put('/playlists/:id', playlistController.updatePlaylist);

router.get('/events/:event_id/snacklists/:snacklist_id/snacks', snackController.getSnacksBySnacklist);
router.post('/snacks', snackController.addSnack);
router.delete('/snacks/:id', snackController.deleteSnack);

router.get('/events/:event_id/snacklists', snacklistController.getSnacklistByEvent);
router.post('/snacklists', snacklistController.addSnacklistByEvent);
router.delete('/snacklists/:id', snacklistController.deleteSnacklist);
router.put('/snacklists/:id', snacklistController.updateSnacklist);


module.exports = router;