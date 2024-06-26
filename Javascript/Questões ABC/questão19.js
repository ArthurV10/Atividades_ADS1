const { question } = require("readline-sync")

console.log("Calculadora de Volume da Esfera!")
var num = 4
var pi = 3.14
var raio = Number(question("Informe o raio da circunferencia: "))
var raio3 = raio * raio * raio
var mult = (num * pi * raio3) 
var resul = mult / 3

console.log(`O Valor do Volume é igual a ${resul.toFixed(1)} m³`)
