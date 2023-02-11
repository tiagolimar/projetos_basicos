lista_span = document.getElementsByTagName("span");
nomes_campo = ['uf','localidade','bairro','logradouro'];

nomes_estado = {
    "AC":"Acre",
    "AL":"Alagoas",
    "AP":"Amapá",
    "AM":"Amazonas",
    "BA":"Bahia",
    "CE":"Ceará",
    "DF":"Distrito Federal",
    "ES":"Espírito Santo",
    "GO":"Goiás",
    "MA":"Maranhão",
    "MT":"Mato Grosso",
    "MS":"Mato Grosso do Sul",
    "MG":"Minas Gerais",
    "PA":"Pará",
    "PB":"Paraíba",
    "PR":"Paraná",
    "PE":"Pernambuco",
    "PI":"Piauí",
    "RJ":"Rio de Janeiro",
    "RN":"Rio Grande do Norte",
    "RS":"Rio Grande do Sul",
    "RO":"Rondônia",
    "RR":"Roraima",
    "SC":"Santa Catarina",
    "SP":"São Paulo",
    "SE":"Sergipe",
    "TO":"Tocantins"    
}

function ApagarValores(){
    for(let i = 0; i<lista_span.length;i++){
        lista_span[i].innerHTML = "-";
    }
}

function ValidadorCEP(){
    cep = document.getElementsByTagName('input')[0].value;
    cep = cep.replace (/\D/g,'');
    return cep
}

function BuscarCEP(){
    ApagarValores();
    cep = ValidadorCEP();
    url = 'https://viacep.com.br/ws/'+cep+'/json/';

    fetch(url).then(function(response){
        response.json().then(PreencherSpan);
    });
}

function PreencherSpan(dados){
    for (let i = 0; i < lista_span.length;i++){
        valor = dados[nomes_campo[i]];

        if (i==0){
            valor = nomes_estado[valor]
        }
        
        lista_span[i].innerHTML = valor;
    }
}


