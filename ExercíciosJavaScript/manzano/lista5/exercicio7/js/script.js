let resultado = 0
let expoente = 0
let expoente1 = 0


for (expoente <= 15; expoente++;) {
    resultado = 1;
    expoente++;
    for (expoente1 <= expoente;expoente1++;) {
        resultado = resultado * 3;
        expoente1++;
    }
    alert('3 elevado a ' + expoente + ' = ' + resultado)
}