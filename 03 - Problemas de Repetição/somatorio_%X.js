var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var num1 = Number(input());
var num2 = Number(input());
var x = Number(input());

var soma = 0;

while(num1 <= num2) {
    if((num1 % 2 === 0) && (num1 % 3 === 0) && (num1 % x === 0)) {
        soma += num1;
    }
    num1 ++;
}
console.log(soma);