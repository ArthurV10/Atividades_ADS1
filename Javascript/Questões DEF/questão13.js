import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Leitor de numeros, e indica qual o maior e o menor entre eles")

  const numero1 = pede_numero("Digite o primeiro numero: ")
  const numero2 = pede_numero("Digite o segundo numero : ")
  const numero3 = pede_numero("Digite o terceiro numero: ")
  const numero4 = pede_numero("Digite o quarto numero: ")
  const numero5 = pede_numero("Digite o quinto numero: ")
  let resultado = maior_menor(numero1, numero2, numero3, numero4, numero5)

print(`
**********|----RESPOSTA----|**********
--------------------------------------
|                                    |
|           ${resultado}             |
|                                    |
--------------------------------------
**************************************
`)
}

function maior_menor (num1, num2, num3, num4, num5){
  let maior = Math.max(num1, num2, num3, num4, num5)
  let menor = Math.min(num1, num2, num3, num4, num5)
  return `O maior é ${maior}, e o menor valor é ${menor} `
}

main()