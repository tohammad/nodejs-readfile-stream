var net = require('net');
var fs = require('fs');

var tcpServer = net.createServer();

tcpServer.on('connection', function(socket) {
    fs.readFile('dummy.txt', function(error, data) {
        socket.write(data);
    });
});

tcpServer.listen(8000);