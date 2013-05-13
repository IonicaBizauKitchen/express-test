var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');

var privateKey = fs.readFileSync('./localhost.key').toString();
var certificate = fs.readFileSync('./localhost.crt').toString();

var options = {
  key : privateKey
, cert : certificate
}

var app = express();

var port = process.env.PORT || 3000; // Used by Heroku and http on localhost
process.env['SECURE_PORT'] = 4000; // Used by https on localhost

http.createServer(app).listen(port, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)
});

https.createServer(options, app).listen(process.env.SECURE_PORT, function () {
    console.log("Express server listening with https on port %d in %s mode", this.address().port, app.settings.env)
});

// Echo back queries of GET
app.get('/', function (req, res) {
    return res.send(req.query);
});


