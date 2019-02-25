const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/db');

var app = express();

app.use(bodyParser.json());


app.get('/plat', function (req, res) {

	console.log("HTTP Get Request");
	
	if(req.body.id){
		console.log("GET ONE");
		var id = req.body.id;
		referencePath = "/Plats/"+id+"/";
	} else {
		console.log("GET ALL");
		var referencePath = "/Plats/";
	}
	
	db.get_data(referencePath, res);
});

app.put('/plat', function (req, res) {

	console.log("HTTP Put Request");

	var id = req.body.id;
	var referencePath = '/Plats/'+id+'/';
	db.add_data(referencePath, req.body, res);
});

app.post('/plat', function (req, res) {

	console.log("HTTP POST Request");
	
	var id = req.body.id;
	var referencePath = '/Plats/'+id+'/';
	
	db.update_data(referencePath, req.body, res);
});

app.delete('/plat', function (req, res) {

   console.log("HTTP DELETE Request");
   
	var id = req.body.id;

	var referencePath = '/Plats/'+id+'/';
	
	db.delete_data(referencePath, res);
});

app.get('/menu', function (req, res) {

	console.log("HTTP Get Request");
	
	if(req.body.id){
		console.log("GET ONE");
		var id = req.body.id;
		referencePath = "/Menu/"+id+"/";
	} else {
		console.log("GET ALL");
		var referencePath = "/Menu/";
	}
	
	db.get_data(referencePath, res);
});

app.put('/menu', function (req, res) {

	console.log("HTTP Put Request");

	var id = req.body.id;
	var referencePath = '/Menu/'+id+'/';
	
	db.add_data(referencePath, req.body, res);
});

app.post('/menu', function (req, res) {

	console.log("HTTP POST Request");
	
	var id = req.body.id;
	var referencePath = '/Menu/'+id+'/';
	
	db.update_data(referencePath, req.body, res);
});

app.delete('/menu', function (req, res) {

   console.log("HTTP DELETE Request");
   
	var id = req.body.id;

	var referencePath = '/Menu/'+id+'/';
	
	db.delete_data(referencePath, res);
});

app.get('/user', function (req, res) {

	console.log("HTTP Get Request");
	
	if(req.body.id){
		console.log("GET ONE");
		var id = req.body.id;
		referencePath = "/Users/"+id+"/";
	} else {
		console.log("GET ALL");
		var referencePath = "/Users/";
	}
	
	db.get_data(referencePath, res);
});

app.put('/user', function (req, res) {

	console.log("HTTP Put Request");

	var id = req.body.id;
	var referencePath = '/Users/'+id+'/';
	
	db.add_data(referencePath, req.body, res);
});

app.post('/user', function (req, res) {

	console.log("HTTP POST Request");
	
	var id = req.body.id;
	var referencePath = '/Users/'+id+'/';
	
	db.update_data(referencePath, req.body, res);
});

app.delete('/user', function (req, res) {

   console.log("HTTP DELETE Request");
   
	var id = req.body.id;

	var referencePath = '/Users/'+id+'/';
	
	db.delete_data(referencePath, res);
});

var server = app.listen(8080, function () {
  
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Server listening at http://%s:%s", host, port);
});

