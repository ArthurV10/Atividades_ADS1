const { question } = require("readline-sync")

console.log("Conversor de Meses para Anos e meses")

var meses = Number(question("Informe a quantidade de meses desejados para a conversão: "))
var Anos = (meses / 12)
var mes = meses % 12
 console.log(`O valor de meses convertido é igual a ${Anos.toFixed(0)} ano/s e ${mes} mês/es!`)