var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var num = Number (input());
var num2 = 0;

var x = num;

while (x > 0) {
    num2 = (num2*10) + (x%10);
    x = Math.floor(x/10);
}

if (num === num2) {
    console.log("1");
}
else {
    console.log("0");
}