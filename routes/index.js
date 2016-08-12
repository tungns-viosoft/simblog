var express = require('express'),
pageRoutes;


pageRoutes  = function() {

	var router = express.Router();

	router.get('/', function(req,res){
		return res.render('index', {xxx: "who is the man"});
	});


	router.get('*', function(req,res){
		return res.send(500);
	});

	return router;
}

module.exports = pageRoutes;