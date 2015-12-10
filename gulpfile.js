'use strict';

var gulp = require('gulp'); // por isso instalar local

// quando  for chamar no terminal instalar global tambem

/*
// criar qualquer tareda sera dessa forma
gulp.task('default', ['concat'] , function(){  // recebe dois argumentos (nome da tareffa, callback )  callback = o que a tarefa faz
	console.log('running task default'); // o other entre os dois argumentos é um midlare, se for mais de uma deve ser um array []
});
*/

gulp.task('other', function(){
	var scripts = [
		//globing file
		'./scripts.js', //  './**/*.js' pega todos os arquivos recursivamente
		'./config.js' // nega o arquivo que esta na masta 
	];
	gulp.src(scripts); //.src  le arquivos
	gulp.src(scripts); //.pipe  escrever ou processar  // pode haaver varios pipes
});