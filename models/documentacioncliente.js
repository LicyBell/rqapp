'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema

var DocumentacionClienteSchema = Schema({
	cliente: String,
	razonsocial: String,
	cuit: String,
	ips: [String],
	observaciones: String

});


module.exports = mongoose.model('DocumentacionCliente', DocumentacionClienteSchema);

//en mongoose.model la primer variable es la entidad que va a usar mongo para guardar
//lo pasa a minusculas y lo pone en plural, osea que en mongo va a guardarlo
//en una coleccion "documentacionclientes", si no la encuentra la crea