const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    //pegar o horário do computador e armazenar na variável
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    //if para aparecer o 0 antes do número caso ele seja menor que 10
    if (hora < 10) hora = '0' + hora;
    if (minuto < 10) minuto = '0' + minuto;
    if (segundo < 10) segundo = '0' + segundo;


    //atribuição da função no horário do html
    horas.textContent = hora;
    minutos.textContent = minuto;
    segundos.textContent = segundo;
})