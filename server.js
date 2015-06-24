var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();
var port = 6969;
var MONGO_URI = 'mongodb://localhost:27017/mongoose-birds';


app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
	res.send('Hello!');
});

app.listen(port, function(req, res) {
	console.log('listening on port ' + port);
});

mongoose.connect(MONGO_URI, function(err){
	console.log('connected to mongo at ' + MONGO_URI);
	console.log(err);
});