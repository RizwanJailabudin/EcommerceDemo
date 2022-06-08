var http = require('http');
http.createServer(function(req,res){
res.writeHeader(200,{'content-type' : 'text/plain'});
    res.write("welcome to home");
    res.end("Thankyou");
}).listen(8080);

