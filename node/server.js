// https://gist.github.com/graphicbeacon/10422384

var net = require('net');
var port = 8000;
var sck;

var server = net.createServer(function(socket) {

	sck = socket;
	sck.allowHalfOpen = true;

	console.log(sck.remoteAddress + ' connected.');
	sck.write('getRole\0', 'utf8');

	// When client sends data
	sck.on('data', function(data) {
		//console.log(data.toString());
		console.log("From Flash = " + data);
		sck.write(data, 'utf8');
	});

	// When client leaves
	sck.on('end', function() {
		console.log(sck.remoteAddress + ' left.');
		sck.end();
	});

	// When socket gets errors
	sck.on('error', function(error) {
		console.log('Socket got problems: ', error.message);
	});
});


// Listening for any problems with the server
server.on('error', function(error) {
	console.log("So we got problems!", error.message);
});

// Listen for a port
server.listen(port, function() {
	console.log("Server listening at http://localhost:" + port);
});