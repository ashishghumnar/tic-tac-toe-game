const express = require('express'),
	path = require('path');
	app = express();
	
	app.use(express.static(path.join(__dirname, 'client')));
	
	app.listen(3000, function(){
		console.log('server started on 3000');
	});