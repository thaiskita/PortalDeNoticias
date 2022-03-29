const dbConnection = require('../../config/dbConnection');

module.exports=function(app){

	var connection=dbConnection();//executa o dbConnection e armazena na variável connection

	//rota para a página de notícia
	app.get('/noticias',function(req,res){
		

		connection.query('select * from noticias',function(error,result){
			if (error){
				console.log(error);
			}
			res.render('noticias/noticias.ejs',{noticias:result});
		});//renderização da tela noticias.ejs juntamente com o envio da variável result
	});
}