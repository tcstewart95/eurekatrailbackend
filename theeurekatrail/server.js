const https = require('https');
const fs = require('fs');
const express = require('express');
const api = require('./api');

//set the key and certificate for SSL connections
var options = {
  key: fs.readFileSync('/etc/theeurekatrail.key'),
  cert: fs.readFileSync('/etc/apache2/ssl/theeurekatrail_com.crt'),
  ca: fs.readFileSync('/etc/apache2/ssl/DigiCertCA.crt')
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
https.createServer(options, app).listen(8001, function() { console.log('listening on port 8001!'); })
