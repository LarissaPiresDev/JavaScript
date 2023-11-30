alert('Somatório dos valores pares existentes na faixa de 1 até 500')
var contadora = 0
var soma = 0
do {

    if (contadora % 2 == 0) {
        soma = contadora + soma
    }
    contadora = contadora + 1
} while (contadora < 501);

alert("O somatório dos números pares de 1 à 500 é: " + soma)
//terminar