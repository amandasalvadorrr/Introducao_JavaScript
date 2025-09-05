function diferencaEmDias(data1, data2) {
    let d1 = new Date(data1);
    let d2 = new Date(data2);

    let diferenca = Math.abs(d2 - d1);

    return Math.floor(diferenca / (1000 * 60 * 60 * 24));
}

console.log(diferencaEmDias("2025-02-15", "2025-02-29")); 
console.log(diferencaEmDias("2025-10-01", "2025-12-31")); 
