let ponteiro_hora = document.getElementById("hora");
let ponteiro_minuto = document.getElementById("minuto");
let ponteiro_segundo = document.getElementById("segundo");


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = Number(dateToday.getHours());
    let contador_minuto = Number(dateToday.getMinutes())*6;
    let contador_segundo = Number(dateToday.getSeconds())*6;

    if(hr < 13){
        contador_hora = hr*30;
    }else{
        contador_hora = (hr-12)*30;
    }

    contador_minuto = contador_minuto + (contador_segundo/60);
    contador_hora = contador_hora + 6*(contador_minuto/60);

    ponteiro_hora.style ="transform:rotate("+contador_hora+"deg)";
    ponteiro_minuto.style ="transform:rotate("+contador_minuto+"deg)";
    ponteiro_segundo.style ="transform:rotate("+contador_segundo+"deg)";
},1000)