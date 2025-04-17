// Remover Caracteres Especiais
// Crie uma função que recebe um texto e remove todos os caracteres que não são letras
// ou números, usando replace() com regex.

var prompt = require('prompt-sync')();

let texto = prompt("Digite um texto: ");

function Caracteres(texto) {

   return texto.replace(/[^a-zA-Z0-9]/g, ' ')
}

let resu = Caracteres(texto);

console.log(resu);
