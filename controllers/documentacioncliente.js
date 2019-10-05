'use strict'

var DocumentacionCliente = require('../models/documentacioncliente');
var fs = require('fs');
var path = require('path');



var Controller = {

	saveDocumentacionCliente: function(req,res){

		var documentacioncliente = new DocumentacionCliente();
		
		var params = req.body;

		documentacioncliente.cliente= params.cliente;
		documentacioncliente.razonsocial = params.razonsocial;
		documentacioncliente.cuit= params.cuit;
		documentacioncliente.ips=  params.ips;
		documentacioncliente.observaciones= params.observaciones;

		documentacioncliente.save((err, documentacionclienteStored) =>{
			if (err) return res.status(500).send({message:"Error al guardar la Documentacion del Cliente"});

			if (!documentacionclienteStored) return res.status(404).send({message:"No se ha podido guardar la Documentacion del Cliente"});

			return res.status(200).send({documentacioncliente: documentacionclienteStored});
		});
	},


	getDocumentacionCliente: function(req,res){

		var documentacionclienteId = req.params.id;

		if(documentacionclienteId == null) return res.status(404).send({message: "No de indico Id a buscar"});

		DocumentacionCliente.findById(documentacionclienteId,(err, documentacioncliente) =>{
			if (err) return res.status(500).send({message:"Error al intentar devolver la informacion"});

			if (!documentacioncliente) return res.status(404).send({message:"La Documentacion del Cliente  no existe"});

			return res.status(200).send({documentacioncliente});
		});
	},

	getDocumentacionClientes: function(req,res){

		DocumentacionCliente.find({}).sort('cliente').exec((err, documentacionclientes) =>{
			if (err) return res.status(500).send({message:"Error al intentar devolver la informacion"});

			if (!documentacionclientes) return res.status(404).send({message:"La Documentacion del Clientes  no existe"});

			return res.status(200).send({documentacionclientes});
		});
	},


	updateDocumentacionCliente: function(req,res){

		var documentacionclienteId = req.params.id;

		var update = req.body;

		DocumentacionCliente.findByIdAndUpdate(documentacionclienteId, update,{new:true}, (err, documentacionclienteUpdate) => {
			
			if (err) return res.status(500).send({message:"Error al intentar Modificar"});

			if (!documentacionclienteUpdate) return res.status(404).send({message:"La Documentacion del Cliente  no encontrada para Modificar"});

			return res.status(200).send({documentacioncliente: documentacionclienteUpdate});
		});
	},		

	deleteDocumentacionCliente: function(req,res){

		var documentacionclienteId = req.params.id;

		DocumentacionCliente.findByIdAndRemove(documentacionclienteId,(err, documentacionclienteRemoved) =>{
			if (err) return res.status(500).send({message:"Error al intentar Eliminar"});

			if (!documentacionclienteRemoved) return res.status(404).send({message:"La Documentacion del Cliente  no encontrada paras Eliminar"});

			return res.status(200).send({documentacioncliente: documentacionclienteRemoved});
		});
	}




};

module.exports = Controller;
