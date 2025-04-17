// Contador de Dígitos em uma String
// Peça um texto e retorne quantos dígitos numéricos ele contém usando split() e
// filter() com isNaN().

var prompt = require('prompt-sync')();

let texto = prompt("Digite um texto: ");

let contador = texto.split(" ");

let numeros = contador.filter(function(cadaCaracter){
    return !isNaN(cadaCaracter) && cadaCaracter !==" ";

})

let quantidade = numeros.length;

console.log("Quantidade de numeros utilizados nas frases: " ,quantidade);


