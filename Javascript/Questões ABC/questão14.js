const { question } = require("readline-sync")

console.log(`
--------------------------------------------------
--------------------------------------------------
----------->Calculo da Média Ponderada<-----------
--------------------------------------------------
--------------------------------------------------`)

var nota1 = Number(question('Digite a nota 1 do aluno: '))
var nota2 = Number(question('Digite a nota 2 do aluno: '))
var nota3 = Number(question('Digite a nota 3 do aluno: '))
var peso1 = Number(question('Digite o peso da nota 1: '))
var peso2 = Number(question('Digite o peso da nota 2: '))
var peso3 = Number(question('Digite o peso da nota 3: '))

var soma1 = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) 
var soma2 =  (peso1 + peso2 + peso3)
var resultado = (soma1 / soma2)
console.log(`A média ponderada das notas dos alunos é ------> ${resultado.toFixed(2)}`)