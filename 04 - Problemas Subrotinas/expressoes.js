function fatorial(num) {
    var fat = 1;
    
    for (var x = 1; x <= num; x++) {
        fat *= x;
    }
    
    return fat;
}

function potencia(base, expoente) {
    var result = 1;
    
    for (var x = 1; x <= expoente; x++) {
        result = result*base;
    }
    
    return result;
}

var E1 = fatorial(5) - fatorial(4);
var E2 = 1/(fatorial(3)) + fatorial(4);
var E3 = fatorial(fatorial(4) - 21);
var E4 = (potencia(8,3)) + (potencia(5,4))/(potencia(3,5));
var E5 = potencia((fatorial(3)),(fatorial(2))+1)+(fatorial(potencia(2,2)));

console.log(E1);
console.log(E2.toFixed(2));
console.log(E3);
console.log(E4.toFixed(2));
console.log(E5);