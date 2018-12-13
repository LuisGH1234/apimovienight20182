const express = require('express');
const router = express.Router();

const routerController = require('../controllers/event/participant_event/rol_controller');

router.use((_, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    next();
});

router.get('/', routerController.getRoles);

module.exports = router;