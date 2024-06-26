const { question } = require("readline-sync");

console.log("Conversor de horas para Semanas, dias e horas")

var hora = Number(question("Digite as horas desejas para a conversão: "))
var semana = Math.floor(hora / 168)
var resto = (hora % 168)
var dia = Math.floor(resto / 24)
var hr = (resto % 24)

console.log(`As horas convetidas é igual a ${semana} semana/s, ${dia} dia/s e ${hr} hora/s`)