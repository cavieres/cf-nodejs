var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res) {
    res.writeHead(400, {"Content-Type":"application/json"});
    res.write(JSON.stringify({nombre: "Uriel", username:"uriel"}));
    res.end();
}).listen(8080);
