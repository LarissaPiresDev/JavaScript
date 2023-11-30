alert('Média da soma dos valores informados')
var somatorio=0
var acumuladora=0
var media=0

do{
    var valor=parseFloat(prompt('Informe um valor'))
    somatorio=somatorio+valor
    acumuladora=acumuladora+1
}while(valor>0)
somatorio=somatorio+(valor*(-1))
acumuladora=acumuladora-1
media=somatorio/acumuladora
alert('A soma dos valores é '+somatorio+' e a média desse valor é '+media)