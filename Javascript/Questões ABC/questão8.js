const { question } = require("readline-sync")

console.log("---->Divisão da soma e subtração de dois números<----")
var num1 = Number(question('Digite o primeiro número: '))
var num2 = Number(question('Digite o segundo número: '))
var resul = ((num1) + (num2)) / ((num1) - (num2))

console.log(`A divisão da soma pela subtração dos números é: ${resul}`)