alert('Eleições')

var eleitores=parseInt(prompt('Digite o total de eleitores:'))
var brancos=parseInt(prompt('Digite o total de votos brancos:'))
var nulos=parseInt(prompt('Digite o total de votos nulos:'))
var invalidos=brancos+nulos
var validos=eleitores-invalidos
var porcentagembrancos=(brancos/eleitores)*100
var porcentagemnulos=(nulos/eleitores)*100
var porcentagemvalidos=(validos/eleitores)*100

alert('A relação das porcentagens são: \n' +porcentagembrancos+'% para brancos \n'+porcentagemnulos+'% para nulos \n'+porcentagemvalidos+'% para válidos.')