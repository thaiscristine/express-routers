'use strict';

let Router = require('express').Router; // maiuscula por ser construtor
let router = new Router();
let controllers = require('../controllers'); // procura pelo arquivo index  (controllers/index)
let bodyParser = require('body-parser'); // recebe e converte dados em json ou urlEncoded
let multer = require('multer')();

router.use(bodyParser.urlencoded({extended:false})); // parsiamento para receber urlencoded
router.use(bodyParser.json());						 // parsiamento para receber json
router.use(multer.array());							 // parsiamento para receber form-data

router
	.route('/users')  // caminho na url (lembrando que existe um prefixo na app.js)
	.get(controllers.users.list) // listar todos os usuarios
	.post(controllers.users.create); // cadastrar os usuarios

router
	.route('/users/:id') // usuario unico
	.get(controllers.users.get) // pegar os dados (getSingle)
	.put(controllers.users.update) //  atualizar os dados (updateSingle)
	.delete(controllers.users.del) // deletar (deleteSingle)*/

module.exports = router;