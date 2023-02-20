var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function potencia(base, expoente) {
    var result = 1;
    for(var x = 1; x <= expoente; x++) {
        result = result*base;
    }
    
    return result;
}

function distancia(ponto1, ponto2) {
    var distancia = Math.sqrt(potencia(ponto1[0] - ponto2[0], 2) + potencia(ponto1[1] - ponto2[1], 2));
    
    return distancia;
}

function Ponto() {
    this.pontoxy = input().split(" ").map(Number);
}

function Circulo() {
    var centro_raio = input().split(" ").map(Number);
    this.centro = centro_raio[0];
    this.ponto = new Ponto(centro_raio[1], centro_raio[2]);
}

// Main
var quant = Number(input());
var pontos = [];

for(var i = 0; i < quant; i++) {
    pontos.push(new Ponto());
}