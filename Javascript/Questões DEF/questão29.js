import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Descobrir se é quadrado perfeito (Numero de 4 digitos)!")

  const numero1 = pede_numero("Escreva o primeiro digito desse numero: ")
  const numero2 = pede_numero("Escreva o segundo digito desse numero: ")
  const numero3 = pede_numero("Escreva o terceiro digito desse numero: ")
  const numero4 = pede_numero("Escreva o quarto digito desse numero: ")
  const calculo = calculo_da_raiz(numero1, numero2, numero3, numero4)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
  ${calculo}                                
--------------------------------------
**************************************
`)

if(numero1 === 0){
  print (`
=====================================
O numero deve possuir quatro digitos
=====================================
  `)
  return main()
}else 
  return print(aparecer_final)


}

function calculo_da_raiz(num1, num2, num3, num4,){
    const mult1 = (num1 * 1000)
    const mult2 = (num2 * 100)
    const mult3 = (num3 * 10)
    const soma = (mult1 + mult2 + mult3 + num4)
    const num1_dezena = (num1 * 10) + (num2)
    const num3_dezena = (mult3 + num4)
    const soma_das_dezenas = (num1_dezena + num3_dezena)
    const raiz = Math.sqrt(soma)
      if(raiz === soma_das_dezenas)
        return `O numero digitado é um quadrado perfeito!
            Sua raiz é ${raiz}`
      else
        return `O numero digitado não é uma quadrado perfeito!`
      
}

main()