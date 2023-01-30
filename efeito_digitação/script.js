let palavras = ["marketing","comunicação","recursos humanos","branding","vendas"];
let div_letras = document.getElementsByClassName("letra");

let tempo_de_espera = 1000;
let tempo_digitacao = 50;
let contador_de_palavra = 0;
let contador_de_letra = 0;

let digitando = setInterval(imprimir,tempo_digitacao);

function imprimir(){
    let palavra = palavras[contador_de_palavra];

    div_letras[contador_de_letra].innerHTML = palavra[contador_de_letra];
    div_letras[contador_de_letra].classList.add('visivel');

    contador_de_letra++;

    if (contador_de_letra == palavra.length){
        contador_de_letra = contador_de_letra -1;

        clearInterval(digitando);

        delay = setTimeout(espera,tempo_de_espera)
        
        contador_de_palavra++;
        if (contador_de_palavra == palavras.length){
            contador_de_palavra = 0;
        }
    }
}

function apagar(){
    div_letras[contador_de_letra].classList.remove('visivel');
    contador_de_letra = contador_de_letra - 1;

    if (contador_de_letra == - 1){
        contador_de_letra = 0;
        clearInterval(apagando);
        digitando = setInterval(imprimir,tempo_digitacao);
    }
}

function espera(){
    apagando = setInterval(apagar,tempo_digitacao)
}