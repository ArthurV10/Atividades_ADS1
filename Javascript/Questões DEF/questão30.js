import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Escreva um numero (Numero de 4 digitos)!")

  const numero1 = pede_numero("Digite o numero: ")
  const calculo = calculo_total(numero1)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
  ${calculo}                                
--------------------------------------
**************************************
`)

if(numero1 < 1000){
  print (`
=====================================
O numero deve possuir quatro digitos
=====================================
  `)
  return main()
}else 
  return print(aparecer_final)
}

function calculo_total(num1){
  const dezena_milhar = Math.trunc(num1 / 100)
  const dezena = ((num1 / 100) - (dezena_milhar)) * 100
  const soma = dezena + dezena_milhar
  const raiz = Math.sqrt(num1)
    if(soma === raiz)
      return `O numero digitado é um quadrado perfeito!
            Sua raiz é ${raiz}`
      else
        return `O numero digitado não é uma quadrado perfeito!`
}
main()