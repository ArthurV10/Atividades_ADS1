const { question } = require("readline-sync");
 
console.log("Conversor de Metros para Km e m!")

var m = Number(question("Informe os metros desejados para converter: "))
var km = Math.floor(m / 1000 )
var metros = (m % 1000)


console.log(`A quantidade de metros covertida é igual a: ${km} Kilometro/s e ${metros} metro/s!`)