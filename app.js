'use strict';

var express = require('express');
var app = express();
var routers = require('./routers/index.js'); // nao precisa escrever index..


// criar "roteadores"
app.use('/api', routers.api) // ('prefixo', ) 

app.listen(3000, serverLogInit);

function serverLogInit() {
	// console.log(process); // especificacoes do ambiente
	console.log('< localhost:3000');
}

module.exports = app;