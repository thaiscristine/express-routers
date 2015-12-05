'use strict';

module.exports = {
	list: list,
	create: create,
	get: get,
	update: update,
	del: del
};

function list(req, res) {
	var users = [
		{ name : 'Thais'},
		{ name : 'Vitor'}
	];
	res.json(users);
}

function create(req, res){
	// forma a se acostumar
	res
		.status(201)
		.json({
			message: 'created'
		});

	// forma de sempre
	//res.status(201); // status code de sucesso com criacao
}
function get(req, res){
 // console.log(req.params);
	var user = { name: 'Li'};
	res.json(user);
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

