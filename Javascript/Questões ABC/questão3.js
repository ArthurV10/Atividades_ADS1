const { question } = require("readline-sync")

//entrada
console.log("Conversor de minutos para hora")

//processamento
var minuto = Number(question("Digite os minutos desejados para a conversão: "))
var hr = Number(minuto / (60))
var min = Number(minuto % (60))
var resul = Number(min / 60)
var resul2 = Number(resul * 60)
//saída
console.log(`O resultado de minutos para  horas é de ${hr.toFixed(0)} hora/s e ${resul2.toFixed(0)} minuto/s`)

