
var acumuladora = 0

do {
    var comodo = String(prompt('Informe o nome do cômodo:'))
    var largura = parseFloat(prompt('Informe a largura cômodo:'))
    var comprimento = parseFloat(prompt('Informe o o comprimento cômodo:'))
    var area = largura * comprimento
    var acumuladora = acumuladora + area

    alert('O cômodo ' + comodo + ' possui ' + area + ' de área')
    //--------- não quer aparecer o nome do cômodo ---------//
    var continuar = String(prompt('Deseja continuar?'))
} while (continuar != "não")
alert('A casa possui '+acumuladora+' m² de área')