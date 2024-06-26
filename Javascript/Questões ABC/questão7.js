const { question } = require("readline-sync")

var num1 = Number(question("Digite o primeiro número: "))
var num2 = Number(question("Digite o segundo número: "))
var num3 = Number(question("Digite o terceiro número: "))

var soma = (num1) + (num2)
var dif = (num2) - (num3)

console.log(`O resultado da soma dos dois primeiros é ${soma} e a o da difernça dos dois ultimos ${dif}`)