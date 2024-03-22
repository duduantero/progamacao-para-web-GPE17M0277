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

var array1 = [
    [1,2],
    [3,4],
    [5,6]
];

var array2 = [
    [1,3,5],
    [2,4,6]    
];

var matrizTransposta1 = transporMatriz(array1);
var matrizTransposta2 = transporMatriz(array2);


console.log("Matriz tranposta");
console.log("Array1");
console.log(matrizTransposta1);
console.log(" ");
console.log("Array2");
console.log(matrizTransposta2);
