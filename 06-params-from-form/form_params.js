var http = require("http"),
    fs = require("fs");

http.createServer(function(req, res){

    if (req.url.indexOf("favicon.ico") > 0) { return; }

    fs.readFile("./index.html", function(err, html){
        var html_string = html.toString();
        var arreglo_parametros = [], parametros = {};

        var variables = html_string.match(/[^\{\}]+(?=\})/g);

        if(req.url.indexOf("?") > 0) {
            // /?nombre=Uriel
            var url_data = req.url.split("?");
            var arreglo_parametros = url_data[1].split("&");
        }

        for (var i = arreglo_parametros.length - 1; i >= 0; i--) {
            var parametro = arreglo_parametros[i];
            // nombre=Uriel
            var param_data = parametro.split("=");
            // [nombre,Uriel]
            parametros[param_data[0]] = [param_data[1]];
            // hash -> {nombre: Uriel}
        }

        for (var i = variables.length - 1; i >= 0; i--) {
            //[nombre,apellido]
            var variable = variables[i];
            // parametros[variable]
            // parametros[nombre]
            html_string = html_string.replace("{" + variables[i] + "}", parametros[variables]);
        }

        res.writeHead(200, {"Content-Type":"text/html"});
        res.write(html_string);
        res.end();
    });
}).listen(8080); 