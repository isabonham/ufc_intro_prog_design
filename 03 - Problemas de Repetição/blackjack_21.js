var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();
 
var quant = Number (input());
 
var carta;
var soma = 0;
var contador_as = 0
 
while (quant > 0) {
    carta = Number (input());
    if (carta === 1) {
        soma += 11;
        contador_as ++;
    }
    else if (carta > 10 && carta < 14) {
        soma += 10;
    }
    else if (carta > 1 && carta < 11) {
        soma += carta;
    }
    quant--;
}
 
while (contador_as > 0) {
    if (soma > 21) {
        soma -= 11;
        soma += 1;
    }
    contador_as--;
}
 
console.log (soma);