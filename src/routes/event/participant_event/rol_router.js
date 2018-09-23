const express = require('express');
const router = express.Router();

const routerController = require('../../../controllers/event/participant_event/rol_controller');

router.get('/get', routerController.getRoles);

module.exports = router;