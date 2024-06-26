const { question } = require("readline-sync")

var real = Number(question("Digite o valor em real: "))
var porcen = Number(question("Digite a porcentagem: "))
var multi = (porcen / 100)
var  valor = real * multi

console.log(`O valor do salário de acordo com a porcentagem é: ${valor}`) 