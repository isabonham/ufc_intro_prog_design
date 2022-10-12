// OBS

var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function compararDias (dia1, dia2) {
    
}

function compararMes (mes1, mes2) {
    
}

function compararAno (ano1, ano2) {
    
}

function compararDatas(data1, data2) {
    if ((data1.dia !== data2.dia) || (data1.mes !== data2.mes) || (data1.ano !== data2.ano)) {
            if (data1.ano > data2.ano) {
                console.log("Mais recente")
            }
    }
    else {
        console.log ("Iguais");
    }
}

function Data () {
    this.dia = Number (input());
    this.mes = Number (input());
    this.mes = Number (input());
}

var data1 = new Data();
var data2 = new Data();

compararDatas (data1, data2);