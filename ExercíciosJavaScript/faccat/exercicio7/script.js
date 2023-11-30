alert('Sua idade contada em dias')
//data atual
var diaatual=parseInt(prompt('Em que dia estamos:'))
var mesatual=parseInt(prompt('De qual mês:'))
var anoatual=parseInt(prompt('De qual ano:'))

//datas do aniversário
var dia=parseInt(prompt('Digite o dia em que você nasceu:'))
var mes=parseInt(prompt('Digite o mês em que você nasceu:'))
var ano=parseInt(prompt('Digite o ano em que você nasceu:'))

//diferença das datas
var diferencadia=diaatual-dia
var diferencames=mesatual-mes
var diferencaano=anoatual-ano

//calculo de dias
diferencames=diferencames*30
diferencaano=diferencaano*365

//soma dos dias
var soma=diferencadia+diferencames+diferencaano


alert('Faz '+soma+' que você nasceu')