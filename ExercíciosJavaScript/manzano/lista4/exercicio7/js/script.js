alert('O fatorial dos valores ímpares de 1 a 10')

var contadora = 1
var fatorial = 1
var valor = 1
do {
    valor = valor + 1

    if ((valor % 2) = 1) {

        do {
            fatorial = fatorial * contadora
            contadora = contadora + 1
        } while (contadora < (valor+1))

        alert('O fatorial de ' + valor + " é igual a " + fatorial)
    }

} while (valor < 10)