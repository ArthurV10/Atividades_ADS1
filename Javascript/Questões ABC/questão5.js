const { question } = require("readline-sync");

console.log("Somatorio de C+D+U")

var numero = Number(question("Digite o numero que deseja: "))
var centena = Math.floor(numero / 100)
var resto = numero % 100
var dezena = Math.floor(resto / 10)
var unidade = resto % 10

var soma = centena + dezena + unidade

console.log(`O resultado da some de ${centena} + ${dezena} + ${unidade} é : ${soma}`)