var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var produto = Number (input());
var jog1 = Number (input());
var jog2 = Number (input());

var result1 = Math.abs (produto - jog1);
var result2 = Math.abs (produto - jog2);

if (result1 === result2) {
    console.log ("empate");
}
else if (result1 < result2) {
    console.log ("primeiro");
}
else if (result1 > result2) {
    console.log ("segundo");
}