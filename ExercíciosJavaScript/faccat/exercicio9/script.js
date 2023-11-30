
var salario=parseFloat(prompt('Digite o valor do seu salário:'))
var porcentagem=parseFloat(prompt('Digite o valor da porcentagem:'))
var reajuste=(porcentagem*salario)/100
var novosalario=salario+reajuste
alert(' O valor do seu salário com o reajuste é'+ novosalario+' reais.')