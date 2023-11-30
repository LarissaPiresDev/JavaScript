var contadora=parseInt(1)
var numero=parseInt(0)
var soma=parseInt(0)
var acumuladora=parseInt(0)
while (contadora==500){
    numero=numero+1
    if((numero%2)==0){
     soma=acumuladora+numero
    alert(numero+'+'+acumuladora+'='+soma)
    acumuladora=soma   
    }
    contadora=contadora+1
}