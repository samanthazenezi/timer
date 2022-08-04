var segundos = 00;
var minutos = 00;
var horas = 00;
var interval

function iniciar() {
    timer()
    interval = setInterval(timer, 1);
}
function pause() {
    clearInterval(interval);
}
function parar() {
    clearInterval(interval);
    minutos = 0;
    segundos = 0;
    document.getElementById('timer').innerText = '00:00:00';
}

function doisDigitos(digito) {
    if(digito < 10){
        return('0' + digito)
    }
    else {
        return(digito)
    }
}

function timer(){
    segundos = segundos + 1;
    if(segundos == 60){
        minutos = minutos + 1;
        segundos = 0;
        if(minutos == 60){
            minutos = 0;
            horas = horas + 1;
        }
    }
    document.getElementById('timer').innerText = doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos);
}