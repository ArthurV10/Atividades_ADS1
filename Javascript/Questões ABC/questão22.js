const { question } = require("readline-sync");

console.log("!Conversor de Quilometros para Metros!")

var km = Number(question("Digite o Valor em Km: "))
var m = 1000
var resul = km * 1000

console.log(`O valor KM para M é de: ${resul} metro/s`)