const { question } = require("readline-sync");

console.log("!Conversor de quilogramas para gramas!")

var Kg = Number(question("Digite o Valor em Kg: "))
var g = 1000
var resul =  Kg * g

console.log(`O valor 'Kg' para 'g' é de: ${resul} grama/s`)