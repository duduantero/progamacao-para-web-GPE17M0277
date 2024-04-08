const matriz = require('./util/matrizTransposta');

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
