alert('Conversão do dólar para o real')
var cotacao=parseFloat(prompt('Informe o valor da cotação do real hoje:'))
var valorDolar=parseFloat(prompt('Informe o valor em dólar que possui:'))
valorReal=valorDolar/cotacao

alert('Você possui '+valorReal+' dólares')