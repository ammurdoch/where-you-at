var express  = require('express');
var path = require('path');
var body_parser = require('body-parser');

var index = require('./routes/index');
var app = express();
var port = 3000;
app.listen(port,function(){

	console.log('Server is Running on port',port);

});

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

app.use('/',index);