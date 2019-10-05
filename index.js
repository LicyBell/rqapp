'use string'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;

//concetar a la base mediante promesa y da exito o error
mongoose.connect('mongodb://localhost:27017/rqapp_documentacion')
		.then(() => {
			console.log("Conexion a Rqapp Documentacion con exito...");


			//Creacion del servidor
			app.listen(port,() => {
				console.log("Servidor corriendo correctamente en la url: localhost:3700");
			});


		})
		.catch(err => console.log(err));
