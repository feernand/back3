//criando um servidor web usando node
const http=require('http');

const server=http.createServer((req,res)=>{
    console.log("Efetuado o pedido")
    res.setHeader('content-type','text/html')
    res.write("<h1>Pedido Aceito 1</1>")
    res.write("<h1>Pedido Aceito 2</2>")
    res.write("<h1>Pedido Aceito 3</3>")
    res.end()
})
server.listen(3000, 'localhost',()=>{
    console.log("Servidor Inciado");
})