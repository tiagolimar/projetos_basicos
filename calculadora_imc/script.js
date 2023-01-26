function Checagem(){
    let valores = document.getElementsByTagName("input");
    let sem_valores_vazios = true;

    Array.from(valores).forEach(function(element){
        if (element.value == ""){
            alert('Escreva um valor para o campo '+element.id);
            sem_valores_vazios = false;
        }
    });
    
    if (sem_valores_vazios){
        Calcular(valores);
    }
}

function Calcular(valores){
    let resultado = document.getElementById("resultado");
    let imagens = document.getElementsByTagName("img");
    let peso = Number(valores[0].value);
    let altura = Number(valores[1].value);

    imc = peso/(altura**2);

    let classificacao = new Map();
    classificacao.set(18.5,"Peso baixo");
    classificacao.set(24.9,"Peso normal");
    classificacao.set(29.9,"Sobrepeso");
    classificacao.set(34.9,"Obesidade grau I");
    classificacao.set(40,"Obesidade grau II");
    classificacao.set(2000,"Obesidade grau III");

    let i = 0;

    for(let valor of classificacao.keys()) {
        if (imc<=valor){
            RemoverVisibilidade(imagens);
            imagens[i].classList.add("visivel");
            resultado.innerHTML = 'Você é uma pessoa com ' + classificacao.get(valor);
            break;
        }
        i++;
    }
}

function RemoverVisibilidade(imagens){
    Array.from(imagens).forEach(function(imagem){
        imagem.classList.remove("visivel")
    });
}