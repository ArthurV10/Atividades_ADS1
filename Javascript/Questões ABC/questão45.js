const { question } = require("readline-sync")

var valor = Number(question("Digite o valor desejado para o saque: "))
var cinquenta = Math.floor(valor / 50)
var resto = (valor % 50)
var dez = Math.floor(resto / 10)
var resto2 = (resto % 10)
var cinco = Math.floor(resto2 / 5)
var um = (resto2 % 5)

console.log(`A quantidade de notas distribuidas para o valor de ${valor.toFixed(0)}, será ${cinquenta.toFixed(0)} nota/s de cinquenta, ${dez.toFixed(0)} nota/s de dez, ${cinco} nota/s de cinco e ${um} nota/s de um`)

