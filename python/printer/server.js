var net = require('net');
var mySocket;

var server = net.createServer(function(socket) {
	mySocket = socket;
	//mySocket.setKeepAlive(true, 0);

	mySocket.on("connect", onConnect);
	mySocket.on("data", onData);
	mySocket.on("disconnect", onDisconnect);

});

function onConnect()
{
	console.log("Connected to Flash");
}

function onData(d)
{
	if(d == "exit\0")
	{
		console.log("exit");
		mySocket.end();
		server.close();
	}
	else
	{
		console.log("From Flash = " + d);
		mySocket.write(d, 'utf8');
	}
}

function onDisconnect()
{
	console.log("Disconnected from Flash");
}

server.listen(9001, "192.168.0.81");
console.log('Server is up and listening on 192.168.0.81:9001');
