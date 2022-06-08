var http = require('http');
var fs = require("fs");


http.createServer(function(req,res){
    fs.writeFile("demo.txt","rizwanfgfgfgfg", function(err, data){
        if(err){
           return console.log.console.error(err);
        }
       // res.writeHeader(200,{'content-type' : 'text/plain'});
    // console.log("Async data : " + data.toString());
     res.write("sucess");
     res.end("END");
    
    });
}).listen(8080);
