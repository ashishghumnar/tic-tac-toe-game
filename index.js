const express = require('express'),
	path = require('path');
	app = express();

var server = require('http').Server(app);

	app.use(express.static(path.join(__dirname, 'client')));
	
	
var server_port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
 console.log(server_port, server_ip_address);
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});
