const { question } = require("readline-sync")

console.log("Calculadora de porcentagem de salário!")

var sal = Number(question("Digite seu salário: "))
var porcent = Number(question("Digite a porcentagem que seu salario aumentou: "))
var div = Number((porcent) / (100))
var mult = Number((sal) * (div))
var total = (sal) + (mult)

console.log(`O novo salário do trabalhador é: ${total}`)
