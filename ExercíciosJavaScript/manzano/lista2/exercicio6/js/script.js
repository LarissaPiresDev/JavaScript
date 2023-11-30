alert('Números em ordem crescente')
var a = parseInt(prompt('Informe o valor de A:'))
var b = parseInt(prompt('Informe o valor de B:'))
var c = parseInt(prompt('Informe o valor de C:'))

alert('Os numeros ordenados em ordem crescente sao:')

if (a < b) {
    if (b < c) {
        alert(a)
        alert(b)
        alert(c)
    }
    else if (a < c) {
        alert(a)
        alert(c)
        alert(b)
    }
    else {
        alert(c)
        alert(a)
        alert(b)
    }
}
else if (b < c) {
    if (a < c) {
        alert(b)
        alert(a)
        alert(c)
    }
    else {
        alert(b)
        alert(c)
        alert(a)
    }
}

else {
    alert(c)
    alert(b)
    alert(a)
}