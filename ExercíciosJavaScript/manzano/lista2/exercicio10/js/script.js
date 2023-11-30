alert('Seu número está na faixa permitida ou não?')

var numero=parseInt(prompt('Insira um numero inteiro:'))

if (numero<=9){
     if (numero>=1) {
        alert('O valor está na faixa permitida.')
    }
}
else {
    alert('O valor não está na faixa permitida.')
}