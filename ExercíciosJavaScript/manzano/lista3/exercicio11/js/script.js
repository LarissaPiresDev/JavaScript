
var acumuladora=0
var continuar='sim'

while (continuar != 'não'){
    var comodo=(prompt('Digite o nome do cômodo:'))
    var largura=parseFloat(prompt('Digite a largura do cômodo:'))
    var comprimento=parseFloat(prompt('Digite comprimento do cômodo:'))
    var area=largura*comprimento
    var acumuladora=parseFloat(area+acumuladora)
    alert('A área do cômodo '+comodo+' é igua a: '+area)
    continuar=(prompt('Deseja continuar?'))

}
alert('O somatório das áreas é igual a: '+acumuladora)