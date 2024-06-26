const { question } = require("readline-sync")
console.log('Soma de Frações')

var num1 = Number(question("Digite o numerador da primeira fração: "))
var num2 = Number(question("Digite o denominador da primeira fração: "))
var num3 = Number(question("Digite o numerador da segunda fração: "))
var num4 = Number(question("Digite o denominador da segunda fração: "))

var mult = num1 * num4
var mult2 = num2 * num3
var soma = mult + mult2
var mult3 = num2 * num4

console.log(`A soma da fração é igual a: ${soma}/${mult3}`)