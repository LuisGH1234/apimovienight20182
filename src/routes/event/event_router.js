const express = require('express');
const router = express.Router();

const eventController = require('../../controllers/event/event_controller');

router.get('/myevents/:id', eventController.getEventsByUser);
router.post('/add', eventController.addEvent);
router.delete('/delete:id', eventController.deleteEvent);
router.put('/update/:id', eventController.updateEvent);

module.exports = router;