// Peça uma frase e uma letra, e retorne quantas palavras começam com essa letra (ex:
// &#39;a&#39;). Use split(), startsWith() e filter().

var prompt = require('prompt-sync')();

let Frase = prompt("Digite uma Frase: ");
let  letra = prompt("Digite as letras: ").toLowerCase();

let palavra = Frase.split(" ");

    let inicialLetra = palavra.filter(palavra => palavra.toLowerCase().startsWith(letra));

console.log(`Quantidade de palavras que comecas com "${letra }": ${inicialLetra.length}`);






