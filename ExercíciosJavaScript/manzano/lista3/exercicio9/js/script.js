var acumuladora = 0
var contadora = 0


while (contadora < 10) {
    var numero = parseInt(prompt('Digite um valor para calcular a média'))
    acumuladora = numero + acumuladora
    numero = 0
    contadora = contadora + 1
}
var media = parseFloat(acumuladora / 10)
alert('A média dos valores digitados é igual a: ' + media)