var express = require('express'),
morgan = require('morgan'),
compress = require('compression'),
bodyParser = require('body-parser'),
methodOverride = require('method-override');
var serveIndex = require('serve-index');
const path = require('path');

var expressLayouts = require('express-ejs-layouts');



// app.set('view engine', 'ejs');

// app.use('/', function(req,res){
// 	res.send("Hello, I'm Tungns");
// });

var app = express();
var routes = require('./routes');

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
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use('/p', serveIndex(path.join(__dirname, 'public'))); //allow to show folder
app.use('/p', express.static(path.join(__dirname, 'public'))); //allow to show each file in folder

app.use(routes());


app.listen(3000);

console.log('server is runing on port 3000');

module.exports = app;
