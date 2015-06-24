var mongoose = require('mongoose');


// Declares the data schema that the database will now follow
//Anything outside of these accepted 'genre's will throw errors
var sightingSchema = new mongoose.Schema({
	name : { type : String, lowercase : true},
	order : { type : String, lowercase : true, maxlength : 25},
	status : { type : String, enum : ['least concern', 'threatened', 'near extinction']},
	confirmed : { type : Boolean, default : false },
	numberSeen : { type : String, min : 0, default : 0}
	
});

//exporting the 'model' of the schema.  This will let us use the 'filtering' properties of the schema.  
module.exports = mongoose.model('Sighting', sightingSchema);