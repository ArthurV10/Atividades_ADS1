const { question } = require("readline-sync")

console.log("Inversor de numeros!")

var numero = Number(question("Digite o numero que deseja: "))
var cent = Math.floor(numero / 100)
var resto = numero % 100
var dez = Math.floor(resto / 10)
var uni = resto % 10

console.log(`O número ${numero} invertido é ${uni}${dez}${cent}`)