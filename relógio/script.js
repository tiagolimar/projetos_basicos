let ponteiro_hora = document.getElementById("ponteiro_hora");
let ponteiro_minuto = document.getElementById("ponteiro_minuto");
let ponteiro_segundo = document.getElementById("ponteiro_segundo");

const medidor_hora = document.getElementById("medidor_hora");
const medidor_minuto = document.getElementById("medidor_minuto");
const numeral = document.getElementById("numeral");
const raio_texto = 215;

setInterval(Motor,1000);

function Motor(){
    let dateToday = new Date();
    let hr = Number(dateToday.getHours());
    let contador_minuto = Number(dateToday.getMinutes())*6;
    let contador_segundo = Number(dateToday.getSeconds())*6;

    if(hr < 13){ contador_hora = hr*30;
    }else{contador_hora = (hr-12)*30;}

    contador_minuto = contador_minuto + (contador_segundo/60);
    contador_hora = contador_hora + 30*(contador_minuto/360);
    
    ponteiro_hora.style ="transform:rotate("+contador_hora+"deg)";
    ponteiro_minuto.style ="transform:rotate("+contador_minuto+"deg)";
    ponteiro_segundo.style ="transform:rotate("+contador_segundo+"deg)";
}

function CriarMedidoresHora(){
    for (let i = 0;i < 11;i++){
        copia = medidor_hora.cloneNode(true);
        copia.style = "transform: rotate("+((i+1)*30)+"deg)";
        medidor_hora.parentNode.appendChild(copia);
    }
}

function CriarMedidoresMinuto(){
    for (let i = 2;i < 60;i++){
        if(i%5!=0){
            copia = medidor_minuto.cloneNode(true);
            copia.style = "transform: rotate("+i*6+"deg)";
            medidor_minuto.parentNode.appendChild(copia);
        }
    }
}

function CriarNumerais(){
    for (let i = 1;i < 12;i++){
        copia = numeral.cloneNode(true);
        copia.innerHTML = i;
        
        angulo = (i*30/360)*2*Math.PI;
        coordenada_x = Math.sin(angulo)*raio_texto;
        coordenada_y = Math.cos(angulo)*raio_texto;

        if(coordenada_x<0){
            coordenada_x = Math.abs(coordenada_x);
            coordenada_x = " - "+coordenada_x;
        }else{
            coordenada_x = " + "+coordenada_x;
        }
        
        if(coordenada_y<0){
            coordenada_y = Math.abs(coordenada_y);
            coordenada_y = " - "+coordenada_y;
        }else{
            coordenada_y = " + "+coordenada_y;
        }

        copia.style = "left: calc(50% - 15px"+coordenada_x+"px);bottom: calc(50% - 15px"+coordenada_y+"px);";
        numeral.parentNode.appendChild(copia);
    }
}

CriarMedidoresHora();
CriarMedidoresMinuto();
CriarNumerais();