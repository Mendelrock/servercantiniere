const firebase = require('firebase');
const {config} = require('./../config');

firebase.initializeApp(config);

module.exports = {
	get_data : function(ref_path, res){
		var dataReference = firebase.database().ref(ref_path);
		dataReference.on("value", 
				  function(snapshot) {
						console.log(snapshot.val());
						res.json(snapshot.val());
						dataReference.off("value");
						}, 
				  function (errorObject) {
						console.log("The read failed: " + errorObject.code);
						res.send("The read failed: " + errorObject.code);
				 });
	},

	add_data : function(ref_path, data, res){
		var dataReference = firebase.database().ref(ref_path);
		dataReference.set(data).then(function() {
				res.send("Data saved successfully.");
			}).catch(function(error){
				res.send("Data could not be saved." + error);
			});
	},

	update_data : function(ref_path, data, res){
		var dataReference = firebase.database().ref(ref_path);
		dataReference.update(
			data, 
			function(error) {
				if (error) {
					res.send("Data could not be updated." + error);
				} 
				else {
					res.send("Data updated successfully.");
				}
			}
		);
	},

	delete_data : function(ref_path, res){
		var dataReference = firebase.database().ref(ref_path);
		dataReference.remove( 
			function(error) {
				if (error) {
					res.send("Data could not be deleted." + error);
				} 
				else {
					res.send("Data deleted successfully.");
				}
			}
		);
	}
};