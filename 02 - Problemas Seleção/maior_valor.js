var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var num1 = Number(input());
var num2 = Number(input());
var num3 = Number(input());
var num4 = Number(input());

var maior = 0;

if(num1 > maior) {
    maior = num1;
}
if(num2 > maior) {
    maior = num2;
}
if(num3 > maior) {
    maior = num3;
}
if(num4 > maior) {
    maior = num4;
}

console.log(maior);