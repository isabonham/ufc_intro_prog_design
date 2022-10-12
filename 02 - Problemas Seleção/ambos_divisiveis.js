var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var num1 = Number (input());
var num2 = Number (input());

if ((num1 % 3 === 0 && num2 % 3 === 0) || (num1 % 5 === 0 && num2 % 5 === 0)) {
    console.log ("sim");
}
else {
    console.log ("nao");
}