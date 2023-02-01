let ponteiro_hora = document.getElementById("hora");
let ponteiro_minuto = document.getElementById("minuto");
let ponteiro_segundo = document.getElementById("segundo");

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let contador_minuto = dateToday.getMinutes();
    let contador_segundo = dateToday.getSeconds();

    let contador_hora = hr*5;

    ponteiro_hora.style("transform:rotate("+contador_hora+"deg)");
    ponteiro_minuto.style("transform:rotate("+contador_minuto+"deg)");
    ponteiro_segundo.style("transform:rotate("+contador_segundo+"deg)");
},1000)