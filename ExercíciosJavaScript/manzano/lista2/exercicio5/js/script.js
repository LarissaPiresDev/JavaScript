var valorA = parseFloat(prompt('Digite o valor de A:'))
var valorB = parseFloat(prompt('Digite o valor de B:'))
var valorC = parseFloat(prompt('Digite o valor de C:'))
if (valorA == 0) {
    alert('Não é possível realizar uma equação de segundo grau')
}
else {
    var delta = ((-valorB) * (-valorB)) - 4 * valorA * valorC
}
if (delta < 0) {
    alert('Não é possível calcular as raízes com o delta negativo')
}
else {
    var xPositivo = ((-valorB) + Math.sqrt(delta)) / (2 * valorA)
    var xNegativo = ((-valorB) - Math.sqrt(delta)) / (2 * valorA)
    alert('O resutado da raíz positiva é ' + xPositivo + ' e da negativa é ' + xNegativo)
}