alert('Digite um número que aparecerá um dia da semana')
var diaSemana = parseFloat(prompt('Digite um número inteiro'))

switch (diaSemana) {
    case 1:
        alert('Domingo')
        break;
    case 2:
        alert('Segunda')
        break;
    case 3:
        alert('Terça')
        break;
    case 4:
        alert('Quarta')
        break;
    case 5:
        alert('Quinta')
        break;
    case 6:
        alert('Sexta')
        break;
    case 7:
        alert('Sábado')
        break;
    default:
        alert('Não possui dia da semana correspondente')
        break;
}