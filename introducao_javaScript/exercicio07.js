function filtrarMaiores(array, numero) {
    return array.filter(item => item > numero);
}

const numeros = [1, 5, 10, 15, 20];
const resultado = filtrarMaiores(numeros, 10);
console.log(resultado);
