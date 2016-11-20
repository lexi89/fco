var express = require('express')
var app = express()
var PORT = (process.env.port || 3000);

app.get('/', function (req, res) {
  res.send('Bla')
})

app.listen(PORT);
