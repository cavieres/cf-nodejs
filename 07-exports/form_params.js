var http = require("http"),
    fs = require("fs"),
    parser = require("./params_parser.js"),
    render_view = require("./render_view.js");

var p = parser.parse;

http.createServer(function(req, res){

    if (req.url.indexOf("favicon.ico") > 0) { return; }

    fs.readFile("./index.html", function(err, html){
        var html_string = html.toString();
        

        var variables = html_string.match(/[^\{\}]+(?=\})/g);

        
        var parametros = p(req);

        console.log(parametros.length);


        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(render_view.render(html_string, parametros));
        res.end();
    });
}).listen(8080); 