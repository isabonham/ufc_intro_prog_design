var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

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

var gritos = input();
gritos = gritos.split(" ");

for(var i = 0; i < gritos.length; i++) {
    gritos[i] = Number(gritos[i]);
}

for(var i = 0; i < gritos.length; i++) {
    for(var j = 0; j < operarios.length; j++) {
        if(gritos[i] === operarios[j] || gritos[i] === (operarios[j] * (-1))) {
            if(j-1 >= 0) {
                operarios[j-1] = operarios[j-1]*(-1);
            }
            if(j+1 < operarios.length) {
                operarios[j+1] = operarios[j+1]*(-1);
            }
        }
    }
}

console.log(operarios);