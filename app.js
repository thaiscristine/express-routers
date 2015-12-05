'use strict';

var express = require('express');
var app = express();

var controllers = require('./controllers'); // procura pelo arquivo index  (controllers/index)

app
	.route('/users')
	.get(controllers.users.list) // listar todos os usuarios
	.post(controllers.users.create); // cadastrar os usuarios

app
	.route('/users/:id') // usuario unico
	.get(controllers.users.get) // pegar os dados (getSingle)
	.put(controllers.users.update) //  atualizar os dados (updateSingle)
	.delete(controllers.users.del) // deletar (deleteSingle)*/

app.listen(3000, serverLogInit);

function serverLogInit() {
	// console.log(process); // especificacoes do ambiente
	console.log('< localhost:3000');
}

module.exports = app;