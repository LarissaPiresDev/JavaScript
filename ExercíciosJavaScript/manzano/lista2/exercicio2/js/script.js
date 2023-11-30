alert('Transformar o valor inserido em positivo, sendo ele positivo ou não')

var valor1 = parseFloat(prompt('Digite um valor inteiro'))

if (valor1 = 0) {
    alert('Não é possível executar')
}
else if (valor1 > 0) {
    alert('O valor positivo é ' + valor1)
}
else {
    positivo = (valor1 * (-1))
    alert('O valor positivo é ' + positivo)
}

//com erro
//não está lendo o valor da variável