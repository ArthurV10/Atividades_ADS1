const { question } = require("readline-sync")

console.log("Conversor de Anos, meses e dias para apenas dias")

var ano = Number(question("Digite quantos anos tem essa pessoa: "))
var mes = Number(question("Digite quantos meses essa pessoa tem após completar o ultimo ano: "))
var dia = Number(question("Digite quantos dias essa pessoa tem após o fim do ultimo mês: "))
var anodia = (ano * 365)
var mesdia = (mes * 30)

var resul = anodia + mesdia + dia

console.log(`Essa pessoa viveu em torno de: ${resul} dia/s`)