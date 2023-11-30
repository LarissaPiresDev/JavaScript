let base = parseInt(prompt('Informe a base:'));
let expoente = parseInt(prompt('Informe o expoente:'));

let resultado = base
let resultado01 = 1
let expoente1 = 1
let expoente2 = expoente


for (expoente1 <= expoente; expoente1++;) {
        resultado = resultado * base;
        resultado01 = resultado01 + resultado;
        expoente1++;
}
    alert( base + ' elevado a ' + expoente + ' = ' + resultado01 );