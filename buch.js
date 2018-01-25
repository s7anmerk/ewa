var express = require('express');
var app = express();
var Angebot = [
	{autor: 'Dan Brown', text: "Sakrileg"},
	{autor: 'J. K. Rowling', text: "Harry Potter"},
	{autor: 'S. Becket', text: "Kalte Asche"},
	{autor: 'Richard David Precht', text: "Wer bin ich und wenn ja wie viele?"}
];
app.get('/', function(req, res){
	res.json(Angebot); 
});
var server = app.listen(3000, function(){
	console.log("Der Server ist nun betriebsbereit");
});
app.get('/Angebot/:id', function(req, res){
if(Angebot.length <= req.params.id || req.params.id < 0){
	res.statusCOde = 404;
	return res.send ('Error 404: Keine Angebote gefunden.');
	}
	var Hilfsvariable = Angebot[req.params.id];
	res.json(Hilfsvariable);
});