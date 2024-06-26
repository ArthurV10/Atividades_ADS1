const { question } = require("readline-sync");

console.log('Questão Fumante')

var anos = (question("Numero de anos que a pessoa consome o cigarro: "))
var quant = (question("Numero de cigarros que a pessoa consome por dia: "))
var preço = (question("O preço de uma cartela de cigarro: "))

var mult = (anos * 365)
var mult2 = (mult * quant)
var div = (mult2 / 20)
var resul = (div * preço)

console.log(`O preço gasto por um fumante é de: ${resul}`)