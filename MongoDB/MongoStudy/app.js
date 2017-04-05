// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

// var db = mongoose.connection;
// db.on('error', console.err);
// db.once('open', function(){
//     console.log("Connected to mongod server");
// });

// mongoose.connect('mongodb://localhost/mongodb_tutorial');

// var port = process.env.PORT || 8080;
// var Book = require('./models/book');
// var router = require('./routes')(app, Book);
// var server = app.listen(port, function(){
//     console.log("server on!")
// });
// app.js
 
// [LOAD PACKAGES]
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
 
// [CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;
 
var Book = require('./models/book.js');
// [CONFIGURE ROUTER]
var router = require('./routes')(app, Book)
 
// [RUN SERVER]
var server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});


mongoose.connect('mongodb://localhost/mongodb_tutorial');