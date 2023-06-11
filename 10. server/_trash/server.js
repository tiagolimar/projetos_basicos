let porta = 8080
let http = require('http');
let static = require('node-static');

let path = new static.Server(`${__dirname}/localhost`)

http.createServer((req,res)=>{
    req.addListener('end',()=>{
        path.serve(req,res)
    }).resume()
}).listen(porta)

console.log(`Server criado em: localhost:${porta}`)