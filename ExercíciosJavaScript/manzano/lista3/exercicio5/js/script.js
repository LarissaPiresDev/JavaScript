var resultado = 1
var contadora = 0
var expoente = 0
var base = 3
var resultado=3

while (contadora < 15) {
    if (expoente == 0) {
        alert(base + ' elevado à ' + expoente + ' é igual a 1')
    }
    else if (expoente == 1) {
        alert(base + ' elevado à ' + expoente + ' é igual a ' + base)
    }
    else {
        resultado = resultado * base
        alert(base + ' elevado à ' + expoente + ' é igual a ' + resultado)
    }

    expoente = expoente + 1
    contadora = contadora + 1
}