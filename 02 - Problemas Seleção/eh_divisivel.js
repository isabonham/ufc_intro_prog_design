var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();
 
var num1 = Number (input());
var num2 = Number (input());
 
if ((num1 % num2) === 0) {
    console.log ("sim");
}
else {
    console.log ("nao");
}