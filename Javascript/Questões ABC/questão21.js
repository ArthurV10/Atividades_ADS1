const { question } = require("readline-sync");

console.log("Conversor de  Farenheit para Celsius")

var faren = Number(question("Informe a temperatura em Farenheit: "))
var mult = (5 * faren)
var soma = mult - 160
var div = soma / 9

console.log(`A transfomação de Farenheit para Celsius é igual a ${div}°C`)