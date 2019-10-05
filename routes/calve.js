'use strict'

var express = require('express');

var CalveController = require('../controllers/calve');


var router = express.Router();


router.post('/save-calve', CalveController.saveCalve);
router.get('/calve/:id', CalveController.getCalve);
router.get('/calves', CalveController.getCalves);
router.put('/update-calve/:id', CalveController.updateCalve);
router.delete('/delete-calve/:id', CalveController.deleteCalve);


module.exports = router;