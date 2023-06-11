const express = require('express')
const cors = require('cors')
const app = express()
const rota = '/usuarios'
const usuarios = []

app.use(express.json())
app.use(cors())

app.get(rota, (req, res) => {
    return res.json(usuarios);
})

app.post(rota, (req, res) => {
    const {nome, idade} = req.body
    let usuario = {nome,idade}
    usuarios.push(usuario)

    return res.status(201).json(usuario)
})

app.listen(5300,()=>{
    console.log('\nServidor inicializado...')
})