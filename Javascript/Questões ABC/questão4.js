const { question } = require("readline-sync");

//entrada
console.log("Conversor de dolares para real")

//processamento
var valor = question("Digite o valor em dolares: ")
var dolar = question("Digite o valor do dolar: ")
var resul = valor * dolar
//saída

console.log(`O valor conevertido para o real é de: ${resul.toFixed(2)}`)