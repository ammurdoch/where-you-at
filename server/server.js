var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
var mongoose = require('mongoose');

var url = "mongodb+srv://where-you-at:gPhT486JxHXovxJU@cluster0-z7rnj.mongodb.net/test";


mongoose.connect(url,{ useNewUrlParser: true },function(err){
	if(err){
		console.log('Could not connect',err);
	}   else{
		console.log('succesfully connected');
	}

});
mongoose.Promise = global.Promise;

var appRouters = require('./routes/api')(router);
var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',appRouters);

app.listen(3000,function(){
	console.log('running the server');
});	