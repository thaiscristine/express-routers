'use strict';

let express = require('express');
let app = express();
let routers = require('./routers/index.js'); // nao precisa escrever index..
let config = require('./config'); // nao precisa escrever index..
let mongoose = require('mongoose');



/* testando o config
console.log(config);
console.log(config, app.get('env'));
//console.log(config, app.set('env', xxx)); // setar a variavel */

// criar "roteadores"
app.use('/api', routers.api) // ('prefixo', caminho) 

let urlDatabase = `mongodb://${config.db.host}/${config.db.name}`; // ${} para nao fazer concatenação, apenas no hecma6

mongoose.connect(urlDatabase);

mongoose.connection.on('error', function(err) { // verificando a conexão, nao esta retornando nada mas pode retornar caso queira
	console.log('database connection error');
}); // adicionando o .on no objeto connection

mongoose.connection.once('open', function(err) { // verificando a conexão, nao esta retornando nada mas pode retornar caso queira
	app.listen(3000, ()=> console.log('> localhost:3000'));
}); // adicionando o .once no objeto connection



module.exports = app;