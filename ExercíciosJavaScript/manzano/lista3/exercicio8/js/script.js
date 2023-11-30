var temperaturaCelsius=0
var temperaturaFahrenheit=0
var contadora=0

while(contadora<11){
    temperaturaCelsius=contadora*10
    temperaturaFahrenheit=(9*temperaturaCelsius+160)/5
    alert('Graus: '+temperaturaCelsius+'°C = '+temperaturaFahrenheit+'°F')
    contadora=contadora+1
}