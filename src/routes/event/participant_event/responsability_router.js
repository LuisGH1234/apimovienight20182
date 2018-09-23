const express = require('express');
const router = express.Router();

const responsabilityController = require('../../../controllers/event/participant_event/responsability_controller');

router.get('/get_by_event/:event_id',responsabilityController.getResponsabilitiesByEvent);
router.get('/get_by_user/:user_id', responsabilityController.getResponsabilitiesByUser)
router.post('/add', responsabilityController.addResponsabilityByEvent);
router.delete('/delete/:id', responsabilityController.deleteResponsability);



module.exports = router;