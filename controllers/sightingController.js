var Sighting = require('../models/SightingModel');


//ALL THE FUNCTIONS FOR THE REST VERBS WILL BE EXPORTED FROM HERE

module.exports = {
	create : function(req, res) {
		var newSighting = new Sighting(req.body);
			newSighting.save(function(err, result) {
				if(err) return res.sendStatus(500);
				return res.send(result);
			
		}); // newSighting
		
	}, // create
	
	read : function(req, res) {
		console.log('the query is ', req.query);
		Sighting.find(req.query)
		.exec(function(err, result) {
			if (err) {return res.sendStatus(500);}
			else {return res.send(result);}
		});
	}, // read
	
	update : function(req, res) {
		Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
			if(err) return res.sendStatus(500);
			 res.send(result);
		});
	}, // update
	
	delete : function(req, res) {
		Sighting.findByIdAndRemove(req.params.id, function(err, result) {
			if(err) return res.sendStatus(500);
			res.send(result);
		});
	} // delete	
};