const express = require ('express');
const app =  express();

const PORT = 8080;
app.listen(PORT,function () {
    console.log('App rodando na porta ' + PORT);
});

app.get('/',function(req,res){
    res.send('Página inicial');
});
app.get('/ola',function(req,res){
    res.send('Olá, mundo!');
});

app.get('/ola/:n',function(req,res){
    let n = req.params.n;
    res.send('Olá, mundo ' + n + ' !');
});

app.get('/verificar-numero-primo:n',function(req,res){
    let n = req.params.n;
    
    res.send('Olá, mundo!');
});
