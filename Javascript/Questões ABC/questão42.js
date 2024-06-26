const { question } = require("readline-sync")

console.log("Distancia de dois pontos!")

var x1 = Number(question("Digite o valor de 'X1': "))
var y1 = Number(question("Digite o valor de 'Y1': "))
var x2 = Number(question("Digite o valor de 'X2': "))
var y2 = Number(question("Digite o valor de 'Y2': "))

var pot1 = ((x2 - x1)**2) + ((y2 - y1)**2)
var raiz = Math.sqrt(pot1)

console.log(`Após todos as etapas, o resultado do calculo é ${raiz}`)