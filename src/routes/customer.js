const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.listJSON);
router.get('/view', customerController.list);

router.post('/add', customerController.saveJSON);
router.post('/viewadd', customerController.save);

router.delete('/delete', customerController.deleteJSON);
router.get('/viewdelete/:id', customerController.delete); //se usa con request.params

router.put('/update', customerController.updateJSON);
router.post('/viewupdate/:id', customerController.update);

module.exports = router;