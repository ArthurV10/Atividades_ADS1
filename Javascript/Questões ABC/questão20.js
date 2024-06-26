const { question } = require("readline-sync");

console.log("Conversor de Celsius para Farenheit")

var celsius = Number(question("Informe a temperatura em Celsius: "))
var mult = (9 * celsius)
var soma = mult + 160
var div = soma / 5

console.log(`A transfomação de Celsius para Farenheit é igual a ${div}°F`)