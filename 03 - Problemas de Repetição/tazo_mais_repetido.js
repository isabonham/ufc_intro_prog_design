var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

var quant = Number(input());

var tazo_mais = 0;
var quant_mais = 0;
var primeiro_tazo = 0;
var quant_tazo = 0;

while(quant > 0) {
    var tazos = Number(input());
    if(primeiro_tazo === tazos) {
        quant_tazo++;
    }
    else {
        if(quant_tazo > quant_mais) {
            quant_mais = quant_tazo;
            tazo_mais = primeiro_tazo;
        }
        primeiro_tazo = tazos;
        quant_tazo = 1;
    }
    quant--;
}
if(quant_tazo > quant_mais) {
    quant_mais = quant_tazo;
    tazo_mais = primeiro_tazo;
}

console.log(tazo_mais);