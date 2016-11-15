var http = require[http];


var express = require('express'),
//importando o modulo express 

app = express();
// criando um app 


app.get('/',function(req,res){
    res.send("teste");

});

var server = app.listen(3000);
console.log('Servidor Express iniciando na posrta %s',server.adress().port);
