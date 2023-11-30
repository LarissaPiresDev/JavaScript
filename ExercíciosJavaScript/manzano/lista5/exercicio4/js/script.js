
let soma = 0

for (let contadora = 1;contadora <= 500; contadora++){
    numero = contadora
    if (numero % 2 === 0) {
        soma += contadora
    }
}
alert('A soma de todos os números pares de 1 a 500 é igual a '+soma)