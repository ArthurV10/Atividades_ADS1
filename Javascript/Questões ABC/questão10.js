const { question } = require("readline-sync")

var num1 = question("Escreva o primeiro número: ")
var num2 = question("Escreva o segundo número: ")

var div = num1 / num2
var quo = Math.floor(div)
var resto = num1 % num2

console.log(`O quociente e resto da divisão são ${quo} e ${resto}`)