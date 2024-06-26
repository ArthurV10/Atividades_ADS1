import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Ler numero e analisar dentro de cada caso")

  const numero1 = pede_numero("Digite o primeiro numero: ")
  const numero2 = pede_numero("Digite o segundo numero : ")
  let resultado = calculo(numero1, numero2)
   const aparecer_final = (`
**********|----RESPOSTA----|**********
--------------------------------------
                                  
     A resposta é ${resultado}             
                                  
--------------------------------------
**************************************
`)

  if (numero1 === numero2)
    return main()
  else 
    return print(`${aparecer_final}`)
}

function calculo(num1, num2){
    let resposta
  if((Math.floor(num1 % num2)) === 1){
        resposta = (num1 + num2 + 1)
    return `O resultado é ${resposta}`

  }else if((Math.floor(num1 % num2)) === 2){
    if ((num1 % 2 && num2 % 2) === 0)
      return "Os dois numeros são pares"
    else if ((num1 % 2 && num2 % 2) != 0)
      return "Os dois numeros são impares"
    else if (((num1 % 2) === 0) && ((num2 % 2) != 0))
      return `O numero ${num1} é par, e ${num2} é impar`
    else (((num1 % 2) != 0) && ((num2 % 2) === 0))
      return `O numero ${num2} é par, e ${num1} é impar`
  
  }else if((Math.floor(num1 % num2)) === 3){
         resposta = ((num1 + num2) * num1)
      return `O resultado é ${resposta}`

  }else if ((Math.floor(num1 % num2)) === 4){
      return((num1 + num2) / num2)

  }else
    num1 = (num1 ** 2)
    num2 = (num2 ** 2)
    return `O resultado é ${num1} e ${num2}`
}
main()