var acumuladora = 0
var contadora = 50
var numero=50

while (contadora < 71) {
    acumuladora = numero + acumuladora
    numero = numero+2
    contadora = contadora + 2
}
var media = parseFloat(acumuladora / 11)
alert('A média aritmética dos valores pares do 50 ao 70 é igual a: ' + media)