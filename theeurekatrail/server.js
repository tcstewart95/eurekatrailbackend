const https = require('https');
const fs = require('fs');
const express = require('express');
const api = require('./api');

//set the key and certificate for SSL connections
var options = {
  key: fs.readFileSync('./keys/key.pem'),
  cert: fs.readFileSync('./keys/key-cert.pem')
};

//use express for routing
const app = express()

//default route for all api calls
app.use('/api', api)

//alert if no route applies
app.use('*', function(req, res) {
  res.send('page not found');
});

//build and run the server
https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end('Server Listening');
}).listen(8001, function() { console.log('listening on port 8001!'); })
