var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

function converter(x){
    switch(x){
        case "rock":
            x = 0
            break;
        case "fire":
            x = 1
            break;
        case "scissors":
            x = 2
            break;
        case "human":
            x = 3
            break;
        case "sponge":
            x = 4
            break;
        case "paper":
            x = 5
            break;
        case "air":
            x = 6
            break;
        case "water":
            x = 7
            break;
        case "gun":
            x = 8
            break;
    }
    return x;
}

function qmganhou(x, y){
    var lances = []
    var vencedor = 0;
    
    for(var i = 0; i<9; i++) {
        lances[i] = 0;
    }
    
    lances[x] = 1;
    lances[y] = 2;
    
    for(var j = 0;j<9;j++) {
        if(lances[j]>0) {
            for(var a = 1; a<=4;a++) {
                if(lances[(j + a) % 9] > 0) {
                    vencedor = lances[j];
                }
            }
        }
    }
    return vencedor;
}

var jg1 = input();
var jg2 = input();

jg1 = converter(jg1)
jg2 = converter(jg2)

var ganhador = qmganhou(jg1, jg2);

if(jg1 === jg2) {
    console.log("empate");
}
else {
    if(ganhador === 1) {
        console.log("jog1")
    }
    else {
        if(ganhador === 2){
            console.log("jog2")
        }
    }
}