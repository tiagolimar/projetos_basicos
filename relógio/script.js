let ponteiro_hora = document.getElementById("hora");
let ponteiro_minuto = document.getElementById("minuto");
let ponteiro_segundo = document.getElementById("segundo");

const medidor_hora = document.getElementById("medidor_hora");
const medidor_minuto = document.getElementById("medidor_minuto");
const quant_medidor_minuto = 360/60;

setInterval(time,1000);

function time(){
    let dateToday = new Date();
    let hr = Number(dateToday.getHours());
    let contador_minuto = Number(dateToday.getMinutes())*6;
    let contador_segundo = Number(dateToday.getSeconds())*6;

    if(hr < 13){
        contador_hora = hr*30;
    }else{
        contador_hora = (hr-12)*30;
    }

    let ajuste = 0;

    contador_minuto = contador_minuto + (contador_segundo/60);
    contador_hora = contador_hora + 6*((contador_minuto/60)-ajuste);
    
    ponteiro_hora.style ="transform:rotate("+contador_hora+"deg)";
    ponteiro_minuto.style ="transform:rotate("+contador_minuto+"deg)";
    ponteiro_segundo.style ="transform:rotate("+contador_segundo+"deg)";
    
}

function CriarMedidores(){
    for (let i = 0;i < 11;i++){
        copia = medidor_hora.cloneNode(true);
        if (i<9){
            copia.innerHTML = " " + (i+1);
        }else{
            copia.innerHTML = i+1;
        }
        copia.style = "transform: rotate("+((i+1)*30)+"deg)";
        medidor_hora.parentNode.appendChild(copia);
    }

    for (let i = 2;i < 60;i++){
        if(i%5!=0){
            copia = medidor_minuto.cloneNode(true);
            copia.style = "transform: rotate("+i*6+"deg)";
            medidor_minuto.parentNode.appendChild(copia);
        }
    }
}

CriarMedidores();