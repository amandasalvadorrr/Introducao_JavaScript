const readline = require('readline-sync');

let temperaturaC = Number(readline.question('Temperatura em Celsius: '));
let conversao = (9/5*temperaturaC)+32;

console.log('A temperatura ' + temperaturaC + '°C em Fahrenheit é: ' + conversao);