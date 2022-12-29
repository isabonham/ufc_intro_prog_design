var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number(input());

for(var j = 0; j < quant; j++) {
    var tam_grito = input();
    tam_grito = tam_grito.split(" ");
    
    for(var i = 0; i < 2; i++) {
        tam_grito[i] = Number(tam_grito[i]);
    }
    
    var operarios = input();
    operarios = operarios.split(" ");
    
    for(var i = 0; i < operarios.length; i++) {
        operarios[i] = Number(operarios[i]);
    }
    
    for(var i = 0; i < operarios.length; i++) {
        if(tam_grito[1] === operarios[i]) {
            if(i-1 >= 0) {
                operarios[i-1] = operarios[i-1]*(-1);
            }
            if(i+1 < operarios.length) {
                operarios[i+1] = operarios[i+1]*(-1);
            }
        }
    }
    console.log(operarios);
}