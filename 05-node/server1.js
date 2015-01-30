var http = require("http") ;
var server = http.createServer(function(req, res){
    res.writeHead(200, {"content-type":"text/plain"});
    res.end("Hello World!\n");
}).listen(8000);