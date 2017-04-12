var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var http = require('http');
var assert = require('assert');

var url = 'mongodb://localhost:3000'

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/style'));
app.set('view engine', 'ejs');

var port = process.env.PORT || 3000;
var router = require('./routes/main.js')(app, user)

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("connect success");
});

mongoose.connect('mongodb://localhost:/studentinfo')

var user = require('./model/user');


var server = app.listen(port, function(){
    console.log('server on! on ' + port)
});