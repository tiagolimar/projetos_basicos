function checagem(){
    let valores = document.getElementsByTagName("input")
    let sem_valores_vazios = true;

    Array.from(valores).forEach(function(element) {
        if (element.value == ""){
            alert('Escreva um valor para o campo '+element.name);
            sem_valores_vazios = false;
        }
    });
    
    if (sem_valores_vazios){
        calcular(valores);
    }
}

function calcular(valores){

    let pessoa = {
        nome : valores[0].value,
        altura : valores[1].value,
        peso : valores[2].value,
    };
    
    pessoa.imc = pessoa.peso/pessoa.altura**2;

    let classificacao = new Map();
   
    classificacao.set(24.9,"Peso normal");
    classificacao.set(29.9,"Sobrepeso");
    classificacao.set(34.9,"Obesidade grau I");
    classificacao.set(40,"Obesidade grau II");
    classificacao.set(2000,"Obesidade grau III");

    for(let valor of classificacao.keys()) {
        if (pessoa.imc<=valor){
            pessoa.imc_tipo = classificacao.get(valor);
            break;
        }
    }
    
    texto_saida = pessoa.nome + ' tem ' + pessoa.imc_tipo;
    document.getElementsByTagName("textarea")[0].value = texto_saida;
}