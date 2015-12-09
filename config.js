'use strict';

let config ={
	development: {
		db: {
			host: 'localhost',       //
			port: 27017,             // porta do banco
			name: 'test_application' // nome do banco
		}
	},
	production: {
		db: {
			host: 'localhost',
			port: 27017,
			name: 'application'	
		}
	}
};

var env = process.env.NODE_ENV || 'development';  // variaveis de ambiente
module.exports = config[env];