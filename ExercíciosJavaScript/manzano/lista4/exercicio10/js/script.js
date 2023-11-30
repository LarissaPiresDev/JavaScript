
var dividendo=parseFloat(prompt('Digite o dividendo:'))
var divisor=parseFloat(prompt('Digite o divisor:'))
var contadora=0
var numeroDividido=dividendo
do{
    var resultado=dividendo-divisor
    dividendo=resultado
    contadora++
}while(resultado>0)
alert(numeroDividido+' dividido por '+divisor+' é igual a '+contadora)