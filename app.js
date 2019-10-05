'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var path =require('path');
var app = express();

//CARGAR ARCHIVOS DE RUTAS
var documentacioncliente_routes = require('./routes/documentacioncliente');
var calve_routes = require('./routes/calve');


//MIDDLEWARES

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //cualquier tipo de petision la convierte en json


//CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//RUTAS
app.use('/',express.static('client',{redirect: false}));
app.use('/api', documentacioncliente_routes);
app.use('/api', calve_routes);

app.get('*', function(req, res, next){
	res.sendFile(path.resolve('client/index.html'));
})






//EXPORTAR
module.exports = app;
