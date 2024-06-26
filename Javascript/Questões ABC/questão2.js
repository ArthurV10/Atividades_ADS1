const { question } = require("readline-sync")

//entrada
console.log("---->Conversor de horas para minutos<----")


//processamento
var hr = Number(question("Digite apenas as horas: "))
var min = Number(question("Digite os minutos: "))
var resul = hr * 60 + min
//saída

console.log(`O resultado convertido de horas para minutos é ${resul} minutos!`)