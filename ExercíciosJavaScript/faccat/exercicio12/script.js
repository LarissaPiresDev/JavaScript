//coletar  os valores em F
//enviar o valor em C
//C/5==(f-32)/9

alert('Transformação de Fahrenheit em Celcius')

var fahrenheit=parseFloat(prompt('Digite a temperatura em Fahrenheit'))
var celcius=(fahrenheit-32)*(5/9)
alert('Temperatura em Celcius: '+celcius+'°C')
