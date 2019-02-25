const express = require('express'); //import express 
const firebase = require('firebase');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var config = {
    apiKey: "AIzaSyAlEY8SeknVa3eUbYj_TPew6h5Ar5W4aCs",
    authDomain: "doom-f6237.firebaseapp.com",
    databaseURL: "https://doom-f6237.firebaseio.com",
    projectId: "doom-f6237",
    storageBucket: "doom-f6237.appspot.com",
    messagingSenderId: "1004943919465"
};

firebase.initializeApp(config);
var user = firebase.auth().currentUser;

app.get('/plat', function (req, res) {

	console.log("HTTP Get Request");
	var platReference = firebase.database().ref("/Users/");

	platReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
});


app.put('/plat', function (req, res) {

	console.log("HTTP Put Request");

	var userName = req.body.UserName;
	var name = req.body.Name;
	var age = req.body.Age;

	var referencePath = '/Users/'+userName+'/';
	var userReference = firebase.database().ref(referencePath);
	userReference.set({Name: name, Age: age}, 
				 function(error) {
					if (error) {
						res.send("Data could not be saved." + error);
					} 
					else {
						res.send("Data saved successfully.");
					}
			});
});

//Update existing instance
app.post('/', function (req, res) {

	console.log("HTTP POST Request");
	
	var userName = req.body.UserName;
	var name = req.body.Name;
	var age = req.body.Age;

	var referencePath = '/Users/'+userName+'/';
	var userReference = firebase.database().ref(referencePath);
	userReference.update({Name: name, Age: age}, 
				 function(error) {
					if (error) {
						res.send("Data could not be updated." + error);
					} 
					else {
						res.send("Data updated successfully.");
					}
			    });
});

//Delete an instance
app.delete('/', function (req, res) {

   console.log("HTTP DELETE Request");
   //todo
});

var server = app.listen(8080, function () {
  
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
});

