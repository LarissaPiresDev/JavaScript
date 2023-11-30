alert('Valores')

while (contadora < 0) {
    var contadora = parseInt(prompt('Digite um valor:'))
    var valorEntrada = parseInt(prompt('Informe outro valor'))
    if (contadora > valorEntrada) {
        var valorMenor = parseInt (valorEntrada)
        var valorMaior = parseInt (contadora)
    }
    else {
        valorMenor = contadora
        valorMaior = valorEntrada
    }
}
alert('O valor menor é '+valorMenor+' e o valor maior é '+valorMaior)
//terminar