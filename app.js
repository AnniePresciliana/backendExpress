var http = require[http];


var express = require('express'),
//importando o modulo express 

app = express();
// criando um app 


app.get('/',function(req,res){
    res.send("teste");   //res.send() envia uma resposta de varios tipos 
// este / é o caminho ,nesse caso a pagina raiz  e uma funcaao calback req e res , que sera chamada 
//no futuro
//app get é o mmetodo como get do http

});



var server = app.listen(3000);
// o servidor vai escutar a porta 300 que o objeto app TENTA criar o servidor e vincuular na porta 300
console.log("Application is running in http://localhost:3000");


