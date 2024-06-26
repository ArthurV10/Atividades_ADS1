const { question } = require("readline-sync");

console.log("Conversor de minutos para dias, horas e minutos!")

var minuto = Number(question("Informe a quantidade de minutos desejas para converter: "))
var dia = Math.floor(minuto / 1440)
var resto = minuto % 1440
var hr = Math.floor(resto / 60)
var min = (resto % 60)

console.log(`A quantidade de minutos convertido é igual a ${dia} dias/s ${hr}, hora/s ${min.toFixed(0)}, minuto/s`)