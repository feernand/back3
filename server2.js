//criando um servidor com respostas de uma página html

const http= require('http')
const fs= require('fs');
let porta= 3000;
let host= 'localhost';

const server =http.createServer((req, res)=>{
    //header
    res.setHeader('content-Type','text/html');
    fs.readFile('page1.html',(erro, data)=>{
        if(erro){
            console.log('Erro');
            res.write("DEU MERRRRDAAAAAAAAAAAAAAA");
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    });

})
server.listen(porta,host,()=>{
    console.log('ure my sunshine')
})