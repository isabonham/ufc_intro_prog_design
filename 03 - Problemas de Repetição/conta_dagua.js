var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number(input());

var valor = 7;

while(quant > 10) {
    if(quant >= 11 && quant <= 30) {
        valor += 1;
    }
    if(quant >= 31 && quant <= 100) {
        valor += 2;
    }
    if(quant >= 101) {
        valor += 5;
    }
    quant--;
}

console.log("R$ " + valor);