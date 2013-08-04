var express = require('express');
var app = express();

app.use(express.logger());

app.get('/', function(request, response) {
    var fs = require ('fs');
    var texto = fs.readFileSync('index.html', 'utf-8');
  response.send(texto);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
