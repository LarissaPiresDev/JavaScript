alert('Fatorial')
var somatoria=0
var contadora=0
do{
    var valor= parseInt(prompt('Digite o valor que deseja saber o fatorial'))
    var fatorial=1
    var contadora2=1

    do{
        fatorial=fatorial*contadora2
        contadora2=contadora2+1
    }while(contadora2<(valor+1))

    somatoria=somatoria+fatorial
    contadora=contadora+1
    alert('O fatorial de '+valor+' é igual a '+fatorial)

}while (contadora<14)

alert('A somatória das fatorações é igual a '+somatoria)

