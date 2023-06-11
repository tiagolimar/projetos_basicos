"use strict";
const url = 'http://127.0.0.1:5300/usuarios'

const display = msg => mensagem.innerHTML +=  msg+'<br>'
const limpar = msg => mensagem.innerHTML = ''

const post = ()=>{
    const valor_nome = nome.value
    const valor_idade = idade.value
    const usuario = {nome: valor_nome,idade: valor_idade}

    limpar()
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(usuario)
    }).then(response=>response.json())
        .then(json=>display(`${json.nome}, ${json.idade}`))
}

const get = () =>{
    limpar()
    fetch(url)
        .then(response=>response.json())
        .then(json=>json.forEach(e=>{
            display(`${e.nome}, ${e.idade}`)
        }))
}