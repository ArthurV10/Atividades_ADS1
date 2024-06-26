const { question } = require("readline-sync")

console.log("Conversor Km/h para M/s")

var km = question("Digite a velocidade em Km/h: ")
var trans = 3.6
var resul = km / trans

console.log(`O valor de km/h para m/s é de: ${resul}`)