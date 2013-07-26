var express = require('express');
var app = express();
var buffer = fs.readFile('index.html');

app.use(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
