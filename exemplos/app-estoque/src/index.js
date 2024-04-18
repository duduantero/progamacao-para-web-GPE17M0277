const express = require('express');
const app = express();
const estoque = require('.scr/estoque');
const { criarProduto, adicionarProduto, removerProdutos } = require('./estoque');




app.get('adicionar/:id/:nome/:qtd',function (req,res){
    let id = req.params.id;
    let nome = req.params.nome;
    let qtd = req.params.qtd;
    let p = criarProduto(id,nome,qtd);
    adicionarProduto(p);
    res.send(p);
})

app.get('/listar',function(res,req){
    res.send(estoque.listarProdutos);
})

app.get ('/remover/:id',function(res,req){
    let id = req.params.id;
    removerProdutos(id);
})

app.get ('/atualizar/:id/:qtd',function(res,req){
    let id = req.params.id;
    let qtd = req.params.qtd;
    atualizarProduto(id,qtd);
    
})

const PORT = 8080;

app.listen(PORT,function(){
    console.log('App funcionando na porta' + PORT);
})