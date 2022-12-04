var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number(input());
var contador = 1;

while(contador <= quant) {
    console.log(contador + ") Vou estudar FUP todos os dias!");
    contador ++;
}