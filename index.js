var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<h1>Hello World!</h1>');
})

app.listen(process.env.PORT || 3000,  function() {
  console.log('Started listening on port 3000');
})
