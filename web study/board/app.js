var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = require('./routes')(app, Book);

var server = app.listen(port, function(){
    console.log("server on! on" + port)
});

var Book = require('./models/book');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected success to mongo server")
});

mongoose.connect('mongodb://localhost/mongo_study');