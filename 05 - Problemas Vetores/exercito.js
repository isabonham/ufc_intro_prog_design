var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function concentrados(vetor) {
    var cont = 0;
    for(var i = 0; i < vetor.length; i++) {
        if(vetor[i] === 0) {
            if(i === 0) {
                if(vetor[i+1] === 0) {
                    cont++;
                }
            }
            else if(i === vetor.length - 1) {
                if(vetor[i-1] === 0) {
                    cont++
                }
            }
            else {
                if(vetor[i-1] === 0 && vetor[i+1] === 0) {
                    cont++;
                }
            }
        }
    }
    return cont;
}

var quant = Number(input());
var vetor = input().split(" ").map(Number);

console.log(concentrados(vetor));