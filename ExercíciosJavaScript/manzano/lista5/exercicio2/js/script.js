let contadora=0
let resultado=0
let numero=parseInt(prompt('Informe a tabuada desejada:'))
for( contadora++; contadora <= 10;){
    resultado=numero*contadora
    alert(numero+' x '+contadora+' = '+resultado)
    contadora++
}