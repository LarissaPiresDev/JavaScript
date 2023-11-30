alert('Sequência de Fibonacci ')

var contadora=0
var numero=1
var numeroAnterior=0
while (contadora<15){
   var acumuladora=numeroAnterior+numero 
   alert('Sequência de fibonacci->'+numeroAnterior+" + "+numero+" = "+acumuladora)
   numero=numeroAnterior
   numeroAnterior=acumuladora
   contadora=contadora+1
}
