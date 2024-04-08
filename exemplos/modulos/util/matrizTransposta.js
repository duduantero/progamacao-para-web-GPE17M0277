function transporMatriz(array) {
    var QtdLinhas = array.length;
    var QtdColunas = array[0].length;
    var matrizTransposta = [];
    
    // Criando matriz com a quantidade de colunas a partir da quantidade de linhas observadas na matriz passada
    for (var i = 0; i < QtdColunas; i++) {
        matrizTransposta[i] = [];
    }
    
    // Transpondo valores do array antigo para o novo, lembrando de inverter a ordem de linha e coluna
    for (var i = 0; i < QtdLinhas; i++) {
        for (var j = 0; j < QtdColunas; j++) {
            matrizTransposta[j][i] = array[i][j];
        }
    }
    return matrizTransposta;
}

module.export = {
    transporMatriz
}