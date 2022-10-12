var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var num1 = Number (input());
var num2 = Number (input());
var num3 = Number (input());

if ((num1 === num2) && (num1 === num3)) {
    console.log("3");
}
else if ((num1 === num2) || (num1 === num3) || (num2 === num3)) {
    console.log("2");
}
else {
    console.log ("0");
}