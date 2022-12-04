var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var x = Number(input());
var n = Number(input());

var contador = 0;

while(n > 0) {
    var calca = Number(input())
    if(calca > x) {
        contador+=1;
    }
    n--;
}

console.log(contador);