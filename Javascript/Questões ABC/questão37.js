const { question } = require("readline-sync");

var dia = (question("Digito numero de dias de vida da pessoa que deseja: "))
var ano = Math.floor(dia / 365)
var resto = (dia % 365)
var mes = Math.floor(resto / 30)
var dias = (resto % 30)

console.log(`O numero de dias convertido é igual a: ${ano} ano/s, ${mes} mes/es, ${dias} dia/s`)