var lines = require("fs").readFileSync(0).toString().split("\n");
var input = () => lines.shift();

// // Sem subrotinas --------
// var x = 1;
// var z = 1;

// var fat5 = 1;
// var fat4 = 1;

// while (x <= 5) {
//     fat5 *= x;
//     x++;
// }

// while (z <= 4) {
//     fat4 *= z;
//     z++;
// }

// var E = fat5 - fat4;

// console.log(E);

// // Com subrotinas; Sem parâmetros --------
// function fatorial_5() {
//     var fat5 = 1;
//     var x = 1;
    
//     while (x <= 5) {
//         fat5 *= x;
//         x++;
//     }
//     return fat5;
// }

// var fat5 = fatorial_5();

// function fatorial_4() {
//     var fat4 = 1;
//     var x = 1;
    
//     while (x <= 4) {
//         fat4 *= x;
//         x++;
//     }
//     return fat4;
// }

// var fat4 = fatorial_4();

// var E = fat5 - fat4;

// console.log (E);

// Com subrotinas; Com parâmetros --------

function fatorial(num) {
    var fat = 1;
    
    for (var x = 1; x <= num; x++) {
        fat *= x;
    }
    
    return fat;
}

fat5 = fatorial(5);
fat4 = fatorial(4);

var E = fat5 - fat4;

console.log(E);

// com interação do usuário
/*
var n = Number (input());
fatn = fatorial(n);
console.log(fatn);
*/