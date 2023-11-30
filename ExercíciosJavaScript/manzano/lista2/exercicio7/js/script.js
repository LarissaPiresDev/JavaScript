alert('Números divisíveis por 3 e 2')

var valor1 = parseFloat(prompt('Digite o primeiro valor:'))
var valor2 = parseFloat(prompt('Digite o segundo valor:'))
var valor3 = parseFloat(prompt('Digite o terceiro valor:'))
var valor4 = parseFloat(prompt('Digite o quarto valor:'))
//primeiro valor
if ((valor1%2)==0){
    if ((valor1%3)==0){
        alert(valor1+' é divisível por 2 e por 3.')
        alert(valor1+' dividido por 2= '+(valor1/2))
        alert(valor1+' dividido por 3= '+(valor1/3))

    }
}
//segundo valor
if ((valor2%2)==0){
    if ((valor2%3)==0){
        alert(valor2+' é divisível por 2 e por 3.')
        alert(valor2+' dividido por 2= '+(valor2/2))
        alert(valor2+' dividido por 3= '+(valor2/3))

    }
}
//terceiro valor
if ((valor3%2)==0){
    if ((valor3%3)==0){
        alert(valor3+' é divisível por 2 e por 3.')
        alert(valor3+' dividido por 2= '+(valor3/2))
        alert(valor3+' dividido por 3= '+(valor3/3))

    }
}
//quanto valor
if ((valor4%2)==0){
    if ((valor4%3)==0){
        alert(valor4+' é divisível por 2 e por 3.')
        alert(valor4+' dividido por 2= '+(valor4/2))
        alert(valor4+' dividido por 3= '+(valor4/3))

    }
}
