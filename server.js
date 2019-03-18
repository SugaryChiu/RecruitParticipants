var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html");
})
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

const port = process.env.PORT || 1337;
var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Service running at http://%s:%s", host, port)
})