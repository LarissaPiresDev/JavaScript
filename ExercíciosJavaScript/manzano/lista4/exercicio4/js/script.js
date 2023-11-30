var quadro = 1
var contadora = 0
var resultado = 0

do {
    alert(quadro)
    quadro = quadro * 2
    resultado = quadro + resultado
    contadora = contadora = 1
}while(contadora<64)
alert('A soma dos rúmeros é: '+resultado)