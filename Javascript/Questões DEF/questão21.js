import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Arredondar numero")

  const numero1 = pede_numero("Digite o numero: ")
  const numero2 = pede_numero("Digite por qual numero deseja dividir: ")
  const divisão = dividir(numero1, numero2)
  let resultado = arredondar(divisão)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
                                  
     A resposta é ${resultado}             
                                  
--------------------------------------
**************************************
`)

  if((numero1 / numero2) != 0)
    return print(aparecer_final)
  else
    print(`
================================================
 O numero ${divisão} não necessita de arredondar
================================================
    `)
    return main()
}

function dividir(num1, num2){
  return (num1 / num2)
}
  

function arredondar(number){
  const inteiro = Math.trunc(number)
  const decimal = (number - inteiro)
  const arredondar = Math.ceil(decimal)
    if(decimal >= 0.5)
      return (arredondar + inteiro)
    else (decimal < 0.5)
      return (Math.floor(decimal + inteiro))
}
main()