const { question } = require("readline-sync");

console.log("!Conversor de Metros para Centimetros!")

var m = Number(question("Digite o Valor em Metros: "))
var cm = 100
var resul = m * cm

console.log(`O valor M para Cm é de: ${resul} centimetro/s`)