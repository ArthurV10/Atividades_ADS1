const { question } = require("readline-sync")

var ms = question("Digite a velocidade em m/s: ")
var trans = Number(3.6)

var kmh = ms * trans

console.log(`O resultado da transformação de m/s para km/h é ${kmh.toFixed(2)} km/h`)
