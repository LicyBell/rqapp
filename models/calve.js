'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CalveSchema = Schema({
	tipo: String,
	nombre: String,
	descripcion: String,
	paginaweb: String,
	email: String,
	usuario: String,
    clave : String,
    observaciones: String

});



module.exports = mongoose.model('Calve', CalveSchema);

//Guarda los datos en la coleccion en mongo
//en mongoose.model la primer variable es la entidad que va a usar mongo para guardar
//lo pasa a minusculas y lo pone en plural, osea que en mongo va a guardarlo
//en una coleccion "documentacionclientes", si no la encuentra la crea