let preencher_municipio = () => {
    let url_municipio = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.value}/municipios`
    
    fetch(url_municipio)
    .then(response=>response.json())
    .then(json=>{
        municipio.innerHTML = ''
        json.forEach(e => {
            municipio.innerHTML += `<option value=${e.id}>${e.nome}</option>\n`
        });
    })
}

let preencher_estado = () => {
    let url_estado = `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao.value}/estados`
    
    fetch(url_estado)
    .then(response=>response.json())
    .then(json=>{
        estado.innerHTML = ''
        json.forEach(e => {
            estado.innerHTML += `<option value=${e.sigla}>${e.nome}</option>\n`
        });
        preencher_municipio()
    })
}

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then(response=>response.json())
    .then(json=>{
        regiao.innerHTML = ''
        json.forEach(e => {
            regiao.innerHTML += `<option value=${e.id}>${e.nome}</option>\n`
        });
        preencher_estado();
    })