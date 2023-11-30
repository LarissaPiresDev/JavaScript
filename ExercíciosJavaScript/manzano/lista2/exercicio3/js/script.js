alert('Média escolar')

var nota1=parseFloat(prompt('Digite sua primeira nota'))
var nota2=parseFloat(prompt('Digite sua segunda nota'))
var nota3=parseFloat(prompt('Digite sua terceira nota'))
var nota4=parseFloat(prompt('Digite sua quarta nota'))

media=(nota1+nota2+nota3+nota4)/4

if (media>=5){
    alert('Você foi aprovado(a) com a média '+media)
}
else{
    alert('Você foi reprovado(a) com a média '+media)
}
