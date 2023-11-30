alert('Calcule uma potenciação')


var resultado = 1
var contadora = 0
var expoente = parseInt(prompt('Digite o valor do expoente:'))
var base = parseInt(prompt('Digite o valor da base:'))
var resultado=base

while (contadora < (expoente+1)) {
    if (contadora == 0) {
        alert(base + ' elevado à ' + contadora + ' é igual a 1')
    }
    else if (contadora == 1) {
        alert(base + ' elevado à ' + contadora + ' é igual a ' + base)
    }
    else {
        resultado = resultado * base
        alert(base + ' elevado à ' + contadora + ' é igual a ' + resultado)
    }

    contadora = contadora + 1
}