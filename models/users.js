'use strict';


let mongoose = require('mongoose');
let Schema = require('mongoose'	).Schema ; // definicao de estrutura da collection, de cada documento salvo na collection, maiusculo porquqe é o construtuor

let schema = new Schema({
	firstname: {type: String, required: true}, // para mais tipos usar chaves {}
	email: {type: String, required: true, unique: true},
	createdAt: {type: Date, set: Date.now} // para ser automatimanete usar o set, nao usar parenteses na funcao porque o mongoose faz isso internamente
											// ex Date.now() em mongoose Date.now, nativo ou nao
}); // objeto com a definicao que vai ter no documento

//let model = new Model('users', schema); // referenciando a collection 

module.exports = mongoose.model('users', schema); // referenciando a collection  e já deixando pronto para ser chamado por outro arquivo
// definicao de estrutura da collection, de cada documento salvo na collection, maiusculo porquqe é o construtuor