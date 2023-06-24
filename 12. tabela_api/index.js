let usuariosHTML = []
const content = document.querySelector('#content')
const filter = document.querySelector('#filter')

const consultar_usuarios = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await response.json()

    usuariosHTML = []

    usuarios.forEach(usuario => {
        const html = `<tr><td>${usuario.id}</td>
        <td>${usuario.name}</td>
        <td>${usuario.email}</td>
        <td>${usuario.username}</td>
        <td>${usuario.website}</td></tr>`

        usuariosHTML.push(html)
        preencher_tabela()
    })
}

const preencher_tabela = ()=>{
    content.innerHTML = ''
    usuariosHTML.forEach(usuarioHTML =>{
        const filtrar = !filter.value || usuarioHTML.toLowerCase().includes(filter.value.toLowerCase())
        if (filtrar) content.innerHTML += usuarioHTML
    })
}