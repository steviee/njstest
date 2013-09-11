var application_root = __dirname;
	express = require('express');
	path = require('path');
	mongoose = require('mongoose');

var	app = express();

// Database 
try {
	mongoose.connect('mongodb://localhost/servicedb');
} catch(e) {
	console.log('Error: ' + e);
}

// Config

app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(application_root, "public")));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/api', function(req, res) {
	res.type('text/plain');
	res.send('SERVICE is running.');
});

// Launch

app.listen(3100);
console.log('Server listening on localhost:3000');