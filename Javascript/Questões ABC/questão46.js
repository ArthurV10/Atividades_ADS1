const { question } = require("readline-sync")

console.log('Calculo de parcela e entrada!')

var valor = question("Informe o valor do produto: ")
var parcela = question("Informe o número de parcelas: ")
var parcela1 = (valor / parcelas)
var entr = parcela + (valor % parcelas)


console.log(`O valor,${valor},"pode ser pago com entrada de",${entrada.toFixed(0)},"e",${parcelas.toFixed(0)},"de",${parcela.toFixed(0)}`)