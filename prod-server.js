//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const defPort = 3500;
const app = express();
const http = require('http');

// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
    return res.send('pong');
});
console.log(path.join(__dirname, 'build', 'index.html'));
app.get('/*', function (req, res) {
    // console.log("test");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || defPort);
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('listening', onListening);





function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */


/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    console.log('Listening on ' + bind);
}
