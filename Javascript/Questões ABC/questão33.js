const { question } = require("readline-sync")

var numero = Number(question("Digite o numero que deseja: "))
var centena = Math.floor(numero / 100)
var resto = numero % 100
var dezena = Math.floor(resto / 10)
var unidade = resto % 10

var inverso = (unidade * 100) + (dezena * 10) + (centena)
var soma = Number(numero + inverso)

console.log(`A soma do numero inteiro com seu inverso é: ${soma}`)