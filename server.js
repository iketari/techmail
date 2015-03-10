// server.js

// BASE SETUP
// =============================================================================

var mongoose   = require('mongoose');
mongoose.connect('mongodb://test:test123@ds049661.mongolab.com:49661/test-iketari', function(err) {
    if (err) {
    	console.log('ERROR CONNECT TO DB!', err)
    } else {
    	console.log('SUCCESS CONNECT TO DB')
    }
}); // connect DB



// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var morgan     = require('morgan');         // logger


//API contest
var apiContest = require('./app/routes/contest')

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));


//Staic sercer
app.use(express.static('public_html'));

var port = process.env.PORT || 8080;        // set our port


// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api/contest', apiContest);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
