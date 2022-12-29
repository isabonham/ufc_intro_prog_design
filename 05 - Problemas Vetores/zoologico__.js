var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number(input());
var animais = input().split(" ").map(Number);

var contagem = [];

for(var i = 0; i < 10; i++) {
    contagem.push(0);
}

for(var i = 0; i < animais.length; i++) {
    contagem[animais[i]]++;
}

var cont = 0;

for(var i = 0; i < contagem.length; i++) {
    if(contagem[i] > 0) {
        cont++;
    }
}

console.log(cont);