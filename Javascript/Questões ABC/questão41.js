const { question } = require("readline-sync")

console.log("Valor do Carro de fabrica")

var carro = Number(question('Digite o valor de fábrica do carro: '))
var porcent = (carro * 0.45)
var porcent2 = (carro * 0.28)
var carro2 = (carro + porcent + porcent2)

console.log(`O Valor do carro para o consumidor será de : ${carro2}`)