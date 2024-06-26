import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print(`ESCOLHA A OPÇÃO PELO NUMERO:
  1- ADIÇÃO
  2- SUBTRAÇÃO
  3- MULTIPLICAÇÃO
  4- DIVISÃO                             `)

  const opção = pede_numero("Digite o numero da opção desejada: ")
  const numero1 = pede_numero("Digite o primeiro numero: ")
  const numero2 = pede_numero("Digite o segundo numero : ")
  let resultado = calculado_pela_opção(opção, numero1, numero2)
   const resposta = (`
**********|----RESPOSTA----|**********
--------------------------------------
                                   
     A resposta é ${resultado}             
                                  
--------------------------------------
**************************************
`)

  if(opção > 4){
    print(`
----------------------------------------------
Escolha os numeros, entres as opções mostradas
----------------------------------------------
    `)
    return main
  }else 
    return print(resposta)
}

function calculado_pela_opção(opção, num1, num2){
  if(opção === 1)
    return (num1 + num2)
  else if(opção === 2)
    return (num1 - num2)
  else if(opção === 3)
    return (num1 * num2)
  else
    return ((num1 / num2).toFixed(2))
}
main()