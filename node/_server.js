var net = require('net');
var s;

var server = net.createServer(function(socket) {
	s = socket;
	s.setKeepAlive(true, 0);
	s.on("connect", onConnect);
	s.on("data", onData);
	s.on("disconnect", onDisconnect);
	s.on("error", onError);
});

function onConnect()
{
	console.log("Connected to Flash");
}

function onData(d)
{
	console.log("From Flash = " + d);
	/*if(d == "exit\0")
	{
		console.log("exit");
		s.end();
		server.close();
	}
	else
	{
		console.log("From Flash = " + d);
		s.write(d, 'utf8');
	}*/
}

function onDisconnect()
{
	console.log("Disconnected from Flash");
}

function onError(e)
{
	console.log(e);
}

server.listen(9001, "192.168.0.81");