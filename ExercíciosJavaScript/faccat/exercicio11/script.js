
//salario fixo, comissao fixa para carro vendido, +5%do valor da venda 
alert('Cálculo salário + comissões')

var salarioFixo=parseFloat(prompt('Informe o valor do salário fixo:'))
var quantCarros=parseInt(prompt('Informe a quantidade de carros vendidos:'))
var valorTotalVendas=parseFloat(prompt('Informe o valor total das vendas:'))
var comissaoCarro=parseFloat(prompt('Informe o valor fixo da sua comissão:'))
var valorTotalPorcentagem=((valorTotalVendas/100)*5)*quantCarros
var valorTotal=salarioFixo+comissaoCarro+valorTotalPorcentagem
alert('Salário total de $'+valorTotal)
