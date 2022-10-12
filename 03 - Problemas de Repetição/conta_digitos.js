var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var digito = Number(input());
var num = Number(input());

var algarismo = 0
var cont = 0;

while(num > 0) {
    algarismo = num % 10;
    num = Math.floor(num / 10);
    if (algarismo === digito) {
        cont ++;
    }
}

console.log(cont);