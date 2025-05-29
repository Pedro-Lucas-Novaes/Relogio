var myVar = setInterval(myTimer, 1000);
function myTimer(){
    var data = new Date(), displayDate;
    if (navigator.userAgent.toLowerCase().indexOf('google') > -1) {
        displayDate = data.toLocaleTimeString('pt-BR');
    }else{
            displayDate = data.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});
        }
        document.getElementById("relogio").innerHTML = displayDate;
}