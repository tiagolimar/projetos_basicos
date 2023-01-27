let i = 0;
intervalo = setInterval(printae,150);

function SumaDaqui(){
    divisorias = document.getElementsByTagName('div');
    divisorias.removeChild(divisoria[i]);
    i = i-1;
    if (i==0){
        clearInterval(sumido);
    }
}

sumido = setInterval(SumaDaqui,150);

function printae(){
    let palavra = 'DIGITANDO...'

    divisoria = document.createElement('div');
    divisoria.innerHTML = palavra[i];
    document.body.appendChild(divisoria);
    
    i++;

    if (i == palavra.length){
        clearInterval(intervalo);
        SumaDaqui(i);
    }
}

