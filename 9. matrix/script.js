const intervalo_tempo = 75
const comprimento_do_rastro = 10
const modo_aleatorio = true //escreva 'binario' para ter apenas caracteres 0 e 1

const quant_copias_coluna = 44
const quant_copias_linhas = 24

const quant_colunas = quant_copias_coluna+1
const quant_linhas = quant_copias_linhas+1
const tipos_de_caracteres = [0,18000,12000,12000,8000,5000,1000,1000,0]
const linha_original = document.querySelector(".linha")
const coluna_original = document.querySelector(".coluna")
lista_de_caracteres = []

function CriarListaCaracteres(){
    if(modo_aleatorio){
        numero_tipo = EscolherItem(tipos_de_caracteres)
    }else{
        numero_tipo = 1000
    }

    for (let i=numero_tipo + 40;i<numero_tipo + 82;i=i+2){
        caractere = String.fromCharCode(i)
        lista_de_caracteres.push(caractere)
    }
}

function EscolherItem(lista){
    indice_aleatorio = Math.floor(Math.random()*lista.length)
    return lista[indice_aleatorio]
}

function MultiplicarElementos(quantidade,elemento,embaralhar=false){
    if(embaralhar){
        indices = [...Array(quantidade).keys()]
        for(let i=0;i<quantidade;i++){
            indice = EscolherItem(indices)
            indices = indices.filter(item => item != indice)

            if(i==0){
                elemento.id = indice
            }else{
                elemento_copia = elemento.cloneNode(true)
                elemento_copia.id = indice
                elemento.parentNode.appendChild(elemento_copia)
            }
        }
    }else{
        for(let i=0;i<quantidade;i++){
            elemento_copia = elemento.cloneNode(true)
            elemento.parentNode.appendChild(elemento_copia)
        }
    }
}

function AlterarCaracteres(){
    colunas = document.getElementsByClassName("coluna")
    Array.from(colunas).forEach(function(coluna){
        linhas = coluna.querySelectorAll(".linha")
        Array.from(linhas).forEach(function(linha){
            linha.innerHTML = EscolherItem(lista_de_caracteres)
        })
    })
}

function AnimarColuna(coluna) {
    let indice_principal = 0
    let linhas = coluna.querySelectorAll(".linha")
  
    setInterval(function() {
        linhas[indice_principal].style = "color: white"
    
        for (let i=comprimento_do_rastro-1;i>=0;i--){

            nivel_de_transparencia = 100*(i/comprimento_do_rastro)

            if(nivel_de_transparencia==0){
                nivel_de_transparencia = "00"
            }

            indice_secundario = indice_principal-(comprimento_do_rastro-i)
            
            if(indice_secundario<0){
                indice_secundario = quant_linhas+indice_secundario
            }
            linhas[indice_secundario].style = "color: #0b880b"+nivel_de_transparencia
        }

        indice_principal ++

        if (indice_principal == linhas.length) {
            indice_principal = 0;
            linhas[quant_linhas].style = "color: #0b880b00"
        }
    }, intervalo_tempo)
}
  
function AnimarColunas() {
    i = 0
    animador = setInterval(function(){
        if(i<quant_colunas){
            coluna = document.getElementById(i)
            AnimarColuna(coluna)
            i++
        }else{
            clearInterval(animador)
        }
    },intervalo_tempo*1.5)
}

if(modo_aleatorio=='binario'){
    lista_de_caracteres = ['0','1']
}else{
    CriarListaCaracteres()
}
MultiplicarElementos(quant_linhas,linha_original)
MultiplicarElementos(quant_colunas,coluna_original,true)
AlterarCaracteres()
AnimarColunas()