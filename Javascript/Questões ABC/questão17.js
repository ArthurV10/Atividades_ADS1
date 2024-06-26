const { question } = require("readline-sync")

console.log('Calculadora da área do retangulo')

var base = Number(question('Informe a medida da base do retângulo: '))
var altura = Number(question('Informa a altura do retângulo: '))
var resul = base * altura

console.log(`A área do retângulo é igual ${resul}m²`)