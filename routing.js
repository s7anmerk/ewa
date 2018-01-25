var express = require('express');
var app = express();

app.get('/', function(req, res){ //Routing to /
	res.send('Hello World from root');})

app.get('/data', function(req, res){ //Routing to /data
	res.send('Hello World from data');
})
app.use(function(request, response){ //Default -> hier Fehlerbehandlung
	response.status(404).send("Seite nicht gefunden!");
});
var server = app.listen(8081, function(){
	var host = server.address().address
	var port =server.address().post
	console.log("Example app listening at http://%s:%s", host, port)
})