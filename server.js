//import all required node modules 
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var sightingController = require('./controllers/sightingController.js')
var Sighting = require('./models/SightingModel.js')

//create app, declare constants
var app = express();
var port = 6969;
var MONGO_URI = 'mongodb://localhost:27017/mongoose-birds';

//use these middle-wares
app.use(bodyParser.json());
app.use(cors());

//Handle all the REST requests -- referencing the controller
app.get('/', sightingController.read);
app.post('/', sightingController.create);
app.put('/:id', sightingController.update);
app.delete('/:id', sightingController.delete);

//set our app / instance of express to listen to the chosen port
app.listen(port, function(req, res) {
	console.log('listening on port ' + port);
});

//connect mongoose -- set it to the port your mongodb is at
//defaults to 27017
mongoose.connect(MONGO_URI, function(err){
	console.log('connected to mongo at ' + MONGO_URI);
	console.log(err);
});