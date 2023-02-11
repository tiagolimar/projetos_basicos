const quant_colunas = 70
const quant_linhas = 38
const intervalo_tempo = 50

const linha_original = document.querySelector(".linha")
const coluna_original = document.querySelector(".coluna")
lista_de_caracteres = []

const coluna_teste = document.querySelector(".coluna")

function CriarListaCaracteres(){
    for (let i=1040;i<1082;i=i+2){
        caractere = String.fromCharCode(i)
        lista_de_caracteres.push(caractere)
    }
}

function EscolherItem(lista){
    indice_aleatorio = Math.floor(Math.random()*lista.length)
    return lista[indice_aleatorio]
}

function MultiplicarElementos(quantidade,elemento){
    for(let i=0;i<quantidade;i++){
        elemento_copia = elemento.cloneNode(true)
        elemento.parentNode.appendChild(elemento_copia)
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

function AnimarColuna(coluna){
    indice_principal = 0
    linhas = coluna.querySelectorAll(".linha")

    setInterval(function(){
        linhas[indice_principal].style = "color: white"

        if(indice_principal>0){
            linhas[indice_principal-1].style = "color: #0b880b"
        }else{
            linhas[linhas.length-1].style = "color: #0b880b"
        }

        indice_principal += 1
        if(indice_principal==linhas.length){
            indice_principal = 0
        }
    },intervalo_tempo)
}

function AnimarColunas(){
    // indice_coluna = 0
    colunas = document.querySelectorAll(".coluna")
    Array.from(colunas).forEach(function(coluna){
        AnimarColuna(coluna)
    })
}
// function AnimarColunas(){
//     indice_coluna = 0
//     colunas = document.querySelectorAll(".coluna")
//     anima_todas_colunas = setInterval(function(){
//         AnimarColuna(colunas[indice_coluna])
//         console.log("opa")
//         indice_coluna ++
//         if (indice_coluna=colunas.length){
//             clearInterval(anima_todas_colunas)
//         }
//     },150)
// }

CriarListaCaracteres()
MultiplicarElementos(quant_linhas,linha_original)
MultiplicarElementos(quant_colunas,coluna_original)
AlterarCaracteres()
AnimarColunas()
// preencher malha com caracteres aleatórios random() chr() listadecaracteres[]
// criar função que altera cor e opacidade das linhas a cada intervalo de tempo