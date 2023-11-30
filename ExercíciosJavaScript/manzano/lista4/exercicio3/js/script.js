var numero = parseInt(0)
var contadora = parseInt(0)

do {
    numero = numero + 1
    if ((numero % 4) == 0) {
        alert(numero + ' é divisível por 4.')
    }
    contadora = contadora + 1
} while (contadora > 200)