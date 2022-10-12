var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function Personagem () {
    this.vida = Number (input());
    this.ataque = Number (input());
}

function duelo (p1, p2) {
    while (p1.vida > 0 && p2.vida > 0) {
        p1.vida -= p2.ataque;
        p2.vida -= p1.ataque;
    }
}

function resultDuelo (p1, p2) {
    if (p1.vida > 0) {
        console.log ("Personagem 1");
    }
    else if (p2.vida > 0) {
        console.log ("Personagem 2");
    }
    else {
        console.log ("Empate");
    }
}

var personagem1 = new Personagem ();
var personagem2 = new Personagem ();

duelo(personagem1, personagem2);
resultDuelo(personagem1, personagem2);