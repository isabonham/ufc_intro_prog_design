var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = 5;
var menor = 30

while (quant > 0) {
    var calca = Number (input());
    if (calca <= menor) {
        menor = calca
    }
    quant--;
}

// sem o laço de repetição --------
// var num1 = Number (input());
// var num2 = Number (input());
// var num3 = Number (input());
// var num4 = Number (input());
// var num5 = Number (input());

// var menor = 30;

// if (num1 < menor) {
//     menor = num1;
// }
// if (num2 < menor) {
//     menor = num2;
// }
// if (num3 < menor) {
//     menor = num3;
// }
// if (num4 < menor) {
//     menor = num4;
// }
// if (num5 < menor) {
//     menor = num5;
// }

console.log (menor);