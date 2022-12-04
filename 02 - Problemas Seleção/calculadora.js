var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var num1 = Number(input());
var num2 = Number(input());
var op = String(input());

var result;

if(op === "+") {
    result = num1 + num2;
    console.log(result);
}
else if(op === "-") {
    result = num1 - num2;
    console.log(result);
}
else if(op === "*") {
    result = num1 * num2;
    console.log(result);
}
else if(op === "/") {
    if(num2 === 0) {
        console.log("invalida");
    }
    else {
        result = num1 / num2;
        console.log(Math.floor(result));
    }
}
else {
    console.log("invalida");
}