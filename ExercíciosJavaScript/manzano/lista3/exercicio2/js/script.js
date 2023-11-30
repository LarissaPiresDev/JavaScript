alert('Total da soma obtida dos cem primeiros números inteiros')
var contadora = parseInt(0)
var numero2 = parseInt(0)
var numero1 = parseInt(0)
while (contadora < 100) {
    numero1 = numero1 + 1
    var resultado = numero1 + numero2
    alert(numero1 + '+' + numero2 + '=' + resultado)
    numero2 = resultado
    contadora = contadora + 1
}

