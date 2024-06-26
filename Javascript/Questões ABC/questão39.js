const { question } = require("readline-sync")

console.log('Resolução da equação')

var a = Number(question("Digite o valor de 'A': "))
var b = Number(question("Digite o valor de 'B': "))
var c = Number(question("Digite o valor de 'C': "))

var R = ((a + b) **2)
var S = ((b + c) **2)

var D = ((R + S) / 2)

console.log(`A solução da equação é: ${D}`)