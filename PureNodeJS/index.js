const http = require('http');

var nStatic = require('node-static');

var fileServer = new nStatic.Server('./public');

const server = http.createServer(function(req,res){
    fileServer.serve(req, res);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);