var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function somatorio(num) {
    var soma = 0;
    
    for(var a = num; a >= 1; a--) {
        soma += a;
    }
    
    return soma;
}

function triangulo(num) {
    var soma = 0;
    
    for(var a = 1; a <= num; a++) {
        var imprimir = "";
        var x = 1;
        while(x <= a) {
            imprimir += x + " ";
            x++;
        }
        soma += somatorio(a);
        console.log(imprimir);
    }
    
    console.log(soma);
}

var num = Number(input());

triangulo(num);