var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function imprimir_linha (num, qntnum, qntespacos) {
    var imprimir = "";
    for (var a = 1; a <= qntespacos; a++) {
        imprimir += " "
    }

    var x = 0;
    while (x < qntnum) {
        imprimir += num+" "
        x++;
    }
    
    console.log (imprimir);
}

function triangulo (num) {
    for (var qN = 1, qE = num; qN <= num; qN++, qE--) {
        imprimir_linha(num, qN, qE);
    }
}

var num = Number (input());

triangulo (num);