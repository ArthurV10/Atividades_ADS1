const { question } = require("readline-sync");

console.log("Numero binario de 4 digitos representado em número decimal")

var num0 = Number(question("Digite o primeiro digito do número binario: "))
var num1 = Number(question("Digite o segundo digito do número binario: "))
var num2 = Number(question("Digite o terceiro digito do número binario: "))
var num3 = Number(question("Digite o quarto digito do número binario: "))

var mult0 = ((2 ** 3) * num0)
var mult1 = ((2 ** 2) * num1)
var mult2 = ((2 ** 1) * num2)
var mult3 = ((2 ** 0) * num3)
var resul = (mult0 + mult1 + mult2 + mult3)

console.log(`${mult0}   ${mult1}  ${mult2}  ${mult3}`)
console.log(`O numero binario em base decimal é igual a ${resul}`)