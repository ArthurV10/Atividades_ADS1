
const { question } = require("readline-sync")

var numero1 = Number(question("Digite o 1° numero que deseja para media: "))
var numero2 = Number(question("Digite o 2° numero que deseja para media: "))
var numero3 = Number(question("Digite o 3° numero que deseja para media: "))

var div = (numero1 + numero2 + numero3) / 3

console.log(`A média dos numeros ${numero1}, ${numero2}, ${numero3} será de: ${div} `)