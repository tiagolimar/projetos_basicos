let contador = 0;
let imagens = document.getElementsByTagName("img");
let nome_classe = 'visivel'

function ImagemAnterior(){
    let incremento = -1;

    if (contador > 0){
        contador = contador + incremento;
    }else{
        contador = imagens.length - 1;
    }
    VerImagem(contador);
}

function ImagemPosterior(){
    let incremento = 1;
    
    if(contador < imagens.length-1){
        contador = contador + incremento;
    }else{
        contador = 0;
    }
    VerImagem(contador);
}

function RemoverImagens(){
    for(let i = 0; i < imagens.length;i++){
        imagens[i].classList.remove(nome_classe);
    }
}

function VerImagem(contador){
    RemoverImagens();
    PintarPin(contador);
    imagens[contador].classList.add(nome_classe);
}

function MostrarImagem(event){
    let id_imagem = event.target.id;
    RemoverImagens();
    PintarPin(id_imagem);
    imagens[id_imagem].classList.add(nome_classe);
}

function PintarPin(id_imagem){
    for (let i = 0;i<imagens.length;i++){
        document.getElementById(i).classList.remove(nome_classe);
    }
    pin = document.getElementById(id_imagem).classList.add(nome_classe);
}

