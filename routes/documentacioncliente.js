'use strict'

var express = require('express');

var DocumentacionClienteController = require('../controllers/documentacioncliente');

var router = express.Router();

router.post('/save-documentacioncliente', DocumentacionClienteController.saveDocumentacionCliente);
router.get('/documentacioncliente/:id', DocumentacionClienteController.getDocumentacionCliente);
router.get('/documentacionclientes', DocumentacionClienteController.getDocumentacionClientes);
router.put('/update-documentacioncliente/:id', DocumentacionClienteController.updateDocumentacionCliente);
router.delete('/delete-documentacioncliente/:id', DocumentacionClienteController.deleteDocumentacionCliente);

module.exports = router;