const { question } = require("readline-sync");

console.log("Resolução de calculo")

var a = Number(question("Digite o valor do elemneto 'A': "))
var b = Number(question("Digite o valor do elemneto 'B': "))
var c = Number(question("Digite o valor do elemneto 'C': "))
var d = Number(question("Digite o valor do elemneto 'D': "))
var e = Number(question("Digite o valor do elemneto 'E': "))
var f = Number(question("Digite o valor do elemneto 'F': "))

var x = ((c * e) - (b * f)) / ((a * e) - (b * d)) 
var y = ((a * f) - (c * d)) / ((a * e) - (b * d)) 

var resul1 = (a * x) + (b * y)
var resul2 = (d * x) + (e * y)

console.log(`
/////////////////////////////////////////////////////////////

(${c} * ${e}) - (${b}*${f}) 
---------------
(${a} * ${e}) - (${b}*${d})

O resultado de X é igual ${x}
O resultado de Y é igual ${y}

Prova: (${a} * ${x}) + (${b} * ${y}) = ${resul1}
       (${d} * ${x}) + (${e} * ${y}) = ${resul2}                           
/////////////////////////////////////////////////////////////`)