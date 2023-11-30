let contadora = 0
let acumuladora = 0
let numero = 0
let soma = 0

//não está parando no 100
for (contadora++; contadora <= 100;){
    numero = numero + 1
    soma = acumuladora + numero
    alert (numero+' + '+acumuladora+' = '+soma)
    acumuladora = soma
}