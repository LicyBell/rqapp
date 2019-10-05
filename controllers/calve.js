'use strict'

var Calve = require('../models/calve');


var Controller = {


	saveCalve: function(req,res){

		var calve = new Calve();
		
		var params = req.body;

		calve.tipo= params.tipo;
		calve.nombre= params.nombre;
		calve.descripcion= params.descripcion;
		calve.paginaweb= params.paginaweb;
		calve.email= params.email;
		calve.usuario= params.usuario;
		calve.clave= params.clave;
		calve.observaciones= params.observaciones;


		calve.save((err, calveStored) =>{
			if (err) return res.status(500).send({message:"Error al guardar la Informacion"});

			if (!calveStored) return res.status(404).send({message:"No se ha podido guardar la informacion"});

			return res.status(200).send({calve: calveStored});
		});
	},


	getCalve: function(req,res){

		var calveId = req.params.id;

		if(calveId == null) return res.status(404).send({message: "No de indico Id a buscar"});

		Calve.findById(calveId,(err, calve) =>{
			if (err) return res.status(500).send({message:"Error al intentar devolver la informacion"});

			if (!calve) return res.status(404).send({message:"La Informacion no existe"});

			return res.status(200).send({calve});
		});
	},

	getCalves: function(req,res){

		Calve.find({}).sort('cliente').exec((err, calves) =>{
			if (err) return res.status(500).send({message:"Error al intentar devolver la informacion"});

			if (!calves) return res.status(404).send({message:"La Informacion no existe"});

			return res.status(200).send({calves});
		});
	},


	updateCalve: function(req,res){

		var calveId = req.params.id;

		var update = req.body;

		Calve.findByIdAndUpdate(calveId, update,{new:true}, (err, calveUpdate) => {
			
			if (err) return res.status(500).send({message:"Error al intentar Modificar"});

			if (!calveUpdate) return res.status(404).send({message:"La Informacion no encontrada para Modificar"});

			return res.status(200).send({calve: calveUpdate});
		});
	},		

	deleteCalve: function(req,res){

		var calveId = req.params.id;

		Calve.findByIdAndRemove(calveId,(err, calveRemoved) =>{
			if (err) return res.status(500).send({message:"Error al intentar Eliminar"});

			if (!calveRemoved) return res.status(404).send({message:"La informacion no encontrada paras Eliminar"});

			return res.status(200).send({calve: calveRemoved});
		});
	}	
	
};

module.exports = Controller;
