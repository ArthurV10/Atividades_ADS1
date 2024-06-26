const { question } = require("readline-sync");



var numero = Number(question("Digite o numero que deseja: "))
var mil = Math.floor(numero / 1000)
var resto = numero % 1000
var centena = Math.floor(resto / 100)
var resto2 = resto % 100
var dezena = Math.floor(resto2 / 10)
var unidade =  resto % 10

var soma = centena + dezena + unidade

console.log(`O resultado da some de ${mil} + ${centena} + ${dezena} + ${unidade}  é : ${soma}`)