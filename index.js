const express = require('express'),
	path = require('path');
	app = express();

var server = require('http').Server(app);

	app.use(express.static(path.join(__dirname, 'client')));
	
	
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 9004,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || 'localhost';
	console.log(port, ip);
	
	server.listen(port, ip);