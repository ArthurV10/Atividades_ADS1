const { question } = require("readline-sync")

console.log("Porcentagem da matéria do Latão pela quantidade")

var latao = Number(question("Digite quantos Kg de Latão será desejado para o calculo: "))
var cobre = (latao * 0.70)
var zinco = (latao * 0.30)
var total = (cobre + zinco)

console.log(`Em ${total} kg de latão possui ${cobre} kg de cobre e ${zinco} kg de zinco!`)