//server.js
const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = 3100;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
console.log(path.join(__dirname, 'build', 'index.html'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
console.log("Server for reactJs started listening on http://locatlhost:"+port+"!")
app.listen(port);
