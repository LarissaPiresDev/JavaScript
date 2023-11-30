alert('Leitura de dois números e cálculo da diferença')

var valor1=parseInt(prompt('Digite um valor inteiro'))
var valor2=parseInt(prompt('Digite outro valor inteiro'))

if (valor1>=valor2){
    resultado=valor1-valor2
    alert('A diferença dos dois números é igual a '+resultado)
}
else{
    resultado=valor2-valor1
    alert('A diferença dos dois números é igual a '+resultado)
}