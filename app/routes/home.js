module.exports=function(app){

//rota para a página principal
app.get('/',function(req,res){
	res.render('home/index.ejs');
});


}