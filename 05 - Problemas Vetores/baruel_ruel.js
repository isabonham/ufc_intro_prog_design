var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

// cria um vetor com os numeros repetidos do vetor original e tira os numeros repetidos do vetor original; retorna o vetor de repetidos
function retorna_repetidos (vetor) { 
    var repetido = [];
    for (var i = 1; i < vetor.length; i++) {
        if (vetor[i-1] === vetor[i]) {
            repetido.push(vetor[i]);
            vetor.splice(i, 1)
            i--;
        }
    }
    return repetido;
}

// tira os numeros repetidos do vetor
function tira_repetidos (vetor) { 
    for (var i = 1; i < vetor.length; i++) {
        if (vetor[i-1] === vetor[i]) {
            vetor.splice(i, 1)
            i--;
        }
    }
    return vetor;
}

// ordena o vetor em ordem crescente
function ordenar (vetor) {
    for (var i = 0; i < vetor.length; i++) {
        for (var j = 0; j < (vetor.length - i - 1); j++) {
            if (vetor[j] > vetor [j+1]) {
                var aux = vetor[j];
                vetor[j] = vetor[j+1];
                vetor[j+1] = aux;
            }
        }
    }
    return vetor
}

// verifica quais numeros faltam no vetor, de 1 até n
function faltas (vetor, n) {
    tira_repetidos(vetor);
    var novo_vetor = vetor;
    var faltosos = [];
    for (var i = 1; i <= n; i++) {
        if (novo_vetor[i-1] != i) {
            novo_vetor.push(i);
            faltosos.push(i);
            ordenar(novo_vetor);
            i--;
        }
    }
    return faltosos;
}

var album = Number (input());
var quant = Number (input());
var figurinhas = input().split(" ").map(Number);

var repetidos = retorna_repetidos(figurinhas)
var faltosos = faltas(figurinhas, album);

if (repetidos.length === 0) {
    console.log("N");
}
else {
    console.log(repetidos);
}

if (faltosos.length === 0) {
    console.log("N");
}
else {
    console.log(faltosos);
}