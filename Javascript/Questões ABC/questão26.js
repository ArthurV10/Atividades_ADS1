const { question } = require("readline-sync")

console.log("Conversor de dias para Dias e Semanas")

var dia = Number(question("Informe a quantidade de dias desejados para a conversão: "))
var semana = Math.floor(dia / 7)
var dias = dia % 7
 console.log(`O valor de dias convertido é igual a ${semana} semana/s e ${dias} dia/s!`)