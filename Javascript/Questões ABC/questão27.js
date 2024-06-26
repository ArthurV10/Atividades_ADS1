const { question } = require("readline-sync")

console.log("Conversor de segundos para Horas, minutos e segundos!")

var segundos = Number(question("Informe so segundos para a conversão: "))
var hr = Math.floor(segundos / 3600)
var resto = (segundos % 3600)
var min = (resto / 60)
var seg = (resto % 60)

console.log(`A conversão será igual a ${hr.toFixed(0)} hr/s, ${min.toFixed(0)} minuto/s e ${seg.toFixed(0)} segundo/s`)
