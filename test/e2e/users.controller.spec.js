'use strict';

var app = require('../../app.js');
var request = require('supertest');
var chai = require('chai');
chai.use(require('chai-things')); // usando chai como variavel
var expect = chai.expect;

// var chai = require('chai').shoul; modifica os dados adicionando a funcao shoul, nao é legal

describe('Users controller', function(){
	describe('.list - GET /users', function(){
		it('should return a json array', function(done){ // done como argumento do it
			request(app)
				.get('/users')
				.end(function(err, res){
					expect(res.statusCode).to.be.equal(200);//expect(res.Code.be.an('array'));
					expect(res.body).to.be.an('array');
					expect(res.body)
						.all.have.property('name');
						//.to.be.an('string');
					done(); // chamar a funcao done
				}); // end retorno do request
		});

		/*it('test de comportamento 2', function(){
			
		});*/
	});

	describe('.create - POST /users', function(){
		it('should send a json object', function(done){
			request(app)
				.post('/users')
				.end(function(err, res){
					expect(res.statusCode).to.be.equal(201); // http criado
					expect(res.body).to.be.an('object');
					done();
				});
		});
	});

	describe('.get - POST /users', function(){
		it('should return a json array', function(done){
			request(app)
				.get('/users')
				.end(function(err, res){
					expect(res.statusCode).to.be.equal(200); // http criado
					expect(res.body).to.be.an('array');
					done();
				});
		});
	});

	describe('.update - POST /users/id:', function(){
		it('should return a json array', function(done){
			request(app)
				.get('/users/id:')
				.end(function(err, res){
					expect(res.statusCode).to.be.equal(200); // http criado
					expect(res.body).to.be.an('array');
					done();
				});
		});
	});

	describe('.del - DELETE /users/id:', function(){
		it('should return a json object', function(done){
			request(app)
				.delete('/users/id:')
				.end(function(err, res){
					expect(res.statusCode).to.be.equal(200); // http criado
					expect(res.body).to.be.an('object');
					done();
				});
		});
	});




});

describe('Users controller', function(){
	
});