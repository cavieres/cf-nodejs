function render(html, variables) {
    
    var html_string = html;
    console.log(variables);
    
    for (var i = variables.length - 1; i >= 0; i--) {
        console.log("ja");    
        //[nombre,apellido]
        var variable = variables[i];
        //console.log(variable);
        // parametros[variable]
        // parametros[nombre]
        html_string = html_string.replace("{" + variable + "}", variable[i]);
    }
    
    return html_string;
}

module.exports.render = render;