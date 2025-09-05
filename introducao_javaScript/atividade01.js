const readline = require('readline-sync');

let numero = readline.question("Digite um número: ");
numero = Number(numero);

if (numero > 0){
    console.log("O número " + numero + " é positivo");
} else if (numero < 0){
    console.log("O número " + numero + " é negativo");
} else {
    console.log("O número é 0");
}