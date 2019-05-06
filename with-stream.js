var net = require('net');
var fs = require('fs');

var tcpServer = net.createServer();

tcpServer.on('connection', function(socket) {
    var rs = fs.createReadStream('dummy.txt');
    rs.pipe(socket);

});

tcpServer.listen(8000);