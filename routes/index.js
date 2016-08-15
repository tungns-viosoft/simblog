var express = require('express'),
pageRoutes;
var expressLayouts = require('express-ejs-layouts');

pageRoutes  = function() {

	var router = express.Router();

	router.get('/', function(req,res){
		return res.render('index', {xxx: "who is the man"});
	});
	

	router.get('/p/a', function(req,res){
		// layout('layout');
		return res.render('index', {xxx: "this is a page", layout: "layout"});
	});



	router.get('*', function(req,res){
		return res.sendStatus(500);
	});

	return router;
}

module.exports = pageRoutes;