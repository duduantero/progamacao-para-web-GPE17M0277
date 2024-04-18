function criarProduto (id , nome, qtd) {
    let p = {
        id:id,
        nome:nome,
        qtd:qtd
    };
    return p;
}

function adicionarProduto (p){
    produtos.push(p);
}

function listarProdutos(){
    return produtos;
}

function removerProdutos(id){
    produtos = produtos.filter((p) =>{
        return p.id != id;
    })
}

function atualizarProduto(id,qtd){
    
    
}

module.exports = {
    criarProduto,
    adicionarProduto,
    listarProdutos,
    removerProdutos,
    atualizarProduto
}