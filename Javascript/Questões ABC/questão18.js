const { question } = require("readline-sync")

console.log("Calculadora de circunfência!")
var num = 2
var pi = 3.14
var raio = Number(question("Informe o raio da circuferência: "))
var resul = num * pi * raio

console.log(`O valor da circunferencia é igual a ${resul.toFixed(1)}`)
