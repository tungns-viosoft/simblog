var express = require('express'),
morgan = require('morgan'),
compress = require('compression'),
bodyParser = require('body-parser'),
methodOverride = require('method-override');
var routes = require('./routes/index');
app.use('/', routes);
// app.set('view engine', 'ejs');

// app.use('/', function(req,res){
// 	res.send("Hello, I'm Tungns");
// });

var app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
} else if (process.env.NODE_ENV === 'production') {
	app.use(compress());
}
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());
app.use(methodOverride());
app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use (routes);


app.listen(3000);

console.log('server is runing on port 3000');

module.exports = app;
