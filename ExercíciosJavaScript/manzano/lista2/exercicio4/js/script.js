alert('Média escolar com exame de recuperação')
var nota1=parseFloat(prompt('Digite a primeira nota'))
var nota2=parseFloat(prompt('Digite a segunda nota'))
var nota3=parseFloat(prompt('Digite a terceira nota'))
var nota4=parseFloat(prompt('Digite a quarta nota'))

media=(nota1+nota2+nota3+nota4)/4

if (media>=7){
    alert('Você foi aprovado(a) com média '+media)
}
else {
    var notaExame=parseFloat(prompt('Digite a nota do exame'))
    media2=(media+notaExame)/2
}

if (media2>=5){
    alert('Você foi aprovado(a) com média '+media2)
}
else{
    alert('Você foi reprovado(a) com média '+media2)
}