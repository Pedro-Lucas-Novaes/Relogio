var myVar = setInterval(myTimer, 1000);
function myTimer(){
    var d = new Date(), displayDate;
    if (navigator.userAgent.toLowerCase().indexOf('google') > -1) {
        displayDate = d.toLocaleTimeString('pt-BR');
    }else{
            displayDate = d.toLocaleTimeString('pt-BR', {timeZone: 'America/Belem'});
        }
        document.getElementById("Relogio").innerHTML = displayDate;
}