var http = require('http');
var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send(' World!')
})

app.use('/', express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})

