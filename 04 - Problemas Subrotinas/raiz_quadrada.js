var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function raiz_quadrada (num) {
    raiz = 0;
    if (num === 1) {
        raiz = 1;
    }
    else if (num === 0) {
        raiz = 0;
    }
    else {
        for (var i = 2; i <= num / 2; i++) {
            if (i*i === num) {
                raiz = i;
            }
        }
    }
    return raiz;
}

var num = Number (input());

console.log (raiz_quadrada(num));