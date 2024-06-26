const { question } = require("readline-sync")

console.log('Calculadora da área de triângulo!')

var altura = Number(question("Informe a altura do triângulo: "))
var base = Number(question("Informe a base do triângulo: "))
var resul = (altura * base) / 2

console.log(`A área do triângulo é ${resul}`)