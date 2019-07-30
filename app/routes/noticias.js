//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

	app.get('/noticias',function(req,res){

	var connection = app.config.dbConnection();
		//depois do refactoring, recebemos o app por paramentro, então é somente
		//recuperar o módulo dentro do app.
		//diminuimos a necessidade de ter requires nos projetos
	var noticiasModel = app.app.models.noticiasModel;
	//app.app significa: o primeiro é a aplicação, o segundo é a pasta app

	//Agora fica assim: o select (regra) foi para o arquivo de model
	noticiasModel.getNoticias(connection, function(error, result){
		res.render('noticias/noticias',{noticias:result});
	});
		
});

}