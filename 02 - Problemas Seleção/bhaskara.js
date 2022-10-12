var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var a = Number (input());
var b = Number (input());
var c = Number (input());

var delta = Math.pow (b, 2) - 4*a*c;

var x1 = (-b + Math.sqrt(delta)) / (2*a);
var x2 = (-b - Math.sqrt(delta)) / (2*a);

if (delta > 0) {
    console.log(x1.toFixed(2));
    console.log(x2.toFixed(2));
}
else if (delta === 0) {
    console.log (x1.toFixed(2));
}
else {
    console.log ("nao ha raiz real");
}