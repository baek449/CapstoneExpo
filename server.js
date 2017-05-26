var express = require('express');
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser');
var app = express();

// Session Use
var session = require('express-session');
app.use(session({
 secret: '*2fe790890UQF#f3d3#$5(dEWgeG#f^7',
 resave: false,
 saveUninitialized: true
}));

// BodyParser
app.use(bodyParser.json());

// Mongoose & Schema
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/capstoneExpo');
var Schema = mongoose.Schema;

// Public Resource Folder
app.use(express.static('public'));

// Routing
require('router/router')(app);

// Run the server!
app.listen (3000, function() {console.log("Listening on port #3000")});
