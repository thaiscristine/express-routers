'use strict';

let Users = require('../models/index.js').users; // 

module.exports = {
	list: list,
	create: create,
	get: get,
	update: update,
	del: del
};

function list(req, res) {

	Users 
		// .findOne({}) // retorna apenas "um" query que retorna os dados
		.find({}, '-__v') // query que retorna os dados // o " - " diz para eliminar (nao apresentar) o document referido
		//.find({}, '-__v -email -firstname') // query que retorna os dados // o " - " diz para eliminar (nao apresentar) o document referido
		.then(function(users){   // promisses 
			res.json(users);
		}) // apenas os dados
		// ou
		// .then((users)=> users)
		/*
		.exec(function(err,data){
			if (err) return throw  err;
		}) // executar passando callback com erro e dados	
		.catch(function(err) {

		}); // qualquer erro cai no catch
		*/
};

function create(req, res){
	// nao funcionou
	// forma a se acostumar
	/*
	console.log(req.body);
	console.log(req.files); // gravar em disco, em pedaços monta a imagem inteira (forma mais leve)
	*/

	let user = new Users(req.body); // aqui ainda esta em memmoria, ainda nao foi pro banco
	console.log(user);              // ver o log criado no terminal 

	let success = function(status){ 	// ATENCAO: dois argumentos no then (function, function)
		console.log(status);
		res
			.status(201)
			.json({
				message: 'created'
			});
	}

	let error = function(err){
		console.log(err);
		res
			.status(400)
			.json({
				message: 'algo errado'
			});
	}

	user
		.save()						// salvar o arquivo
		.then(success, error);        

	// forma de sempre
	//res.status(201); // status code de sucesso com criacao
}
function get(req, res){
 // console.log(req.params);
	Users // 										// var ObjectId = require('mongodb')
		.findById('req.param.id') // queries mais completas .findOne({_id: ObjectId(req.param.id), active: true})
		.then(function(user){
			res.json(user);
		});
	/*var user = { name: 'Li'};
	res.json(user);*/
}

function update(req,res){
	res.json({
		message: 'updated'
	});
}

function del(req,res){
	var user = { name: ''};
	res.json({
		message: 'deleted'
	});
}

