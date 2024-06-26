const { question } = require("readline-sync")

console.log('Calculadora da área do quadrado')

var lado = Number(question('Informe a medida do lado do quadrado: '))
var resul = lado * lado

console.log(`A área do quadrado é igual ${resul}m²`)