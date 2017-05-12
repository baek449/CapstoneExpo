var express = require('express');
var app_ = express();

// Session Use
var session = require('express-session');
app_.use(session({
 secret: '*2fe790890UQF#f3d3#$5(dEWgeG#f^7',
 resave: false,
 saveUninitialized: true
}));

// Configuring view directory and engine
app_.set('views', __dirname + '/views'); // View pages are in /views directory
app_.set('view engine', 'ejs'); // Use EJS as view engine
app_.engine('html', require('ejs').renderFile);


var dao_=require('./dao/dao');
dao_.init(app_,function(app,dao){
	
	// Configure Router
	require('./router/router')(app,dao);

	// Run server
	var server = app.listen(23400, function(){
	    console.log("Server Started 23400");
	});

});
