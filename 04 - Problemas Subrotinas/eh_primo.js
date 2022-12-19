var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();
 
function primo(num) {
    var contador = 0;
    for(var x = 1; x <= num; x++) {
        if(num % x === 0) {
            contador++;
        }
    }
    if(contador === 2) {
        return true;
    }
    else {
        return false;
    }
}
 
var a = Number(input());
var b = Number(input());
 
for(a; a <= b; a++) {
    if(primo(a)) {
        console.log(a);
    }
}