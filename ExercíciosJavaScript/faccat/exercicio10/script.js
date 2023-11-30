//custoTotal=custo de fábrica+%distribuidor+%impostos(aplicados no custo de fábrica)

var custofabrica=parseFloat(prompt('Informe o valor de fábrica do carro:'))
var porcentagemdistribuidor=parseFloat(prompt('Informe a porcentagem da taxa de distribuição de fábrica do carro:'))
var porcentagemimpostos=parseFloat(prompt('Informe a porcentagem da taxa de impostos de fábrica do carro:'))
var distribuidor=(porcentagemdistribuidor*custofabrica)/100
var impostos=(porcentagemimpostos*custofabrica)/100
var custototal=custofabrica+impostos+distribuidor
alert('Custo final para o consumidor: R$'+custototal)