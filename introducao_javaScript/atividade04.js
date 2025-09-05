const readline = require('readline-sync');

let numero = readline.question('Insira um número: ')
numero = Number(numero);

let fatorial = 1;
let i = numero;

while (i > 1) {
    fatorial *= i;
    i--;
}

console.log(`O fatorial de ${numero} é ${fatorial}`);