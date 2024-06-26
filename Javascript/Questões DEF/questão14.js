import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Indicar se os numeros são maiores que a media!")

  const numero1 = pede_numero("Digite o primeiro numero: ")
  const numero2 = pede_numero("Digite o segundo numero : ")
  const numero3 = pede_numero("Digite o terceiro numero: ")
  const numero4 = pede_numero("Digite o quarto numero: ")
  const numero5 = pede_numero("Digite o quinto numero: ")
  const calculo =  media(numero1, numero2, numero3, numero4, numero5)
  let resultado = maior_que_a_media(calculo, numero1, numero2, numero3, numero4, numero5)

print(`
**********|----RESPOSTA----|**********
--------------------------------------
                                  
             ${resultado}             
                                  
--------------------------------------
**************************************
`)
}

function media (num1, num2, num3, num4, num5){
  return ((num1 + num2 + num3 + num4 + num5) / 5)
}

function maior_que_a_media(media, number1, number2, number3, number4, number5){
  let resultado = ``
  if (number1 > media){
    resultado += `O numero ${number1} é maior que a media\n`
  }if (number2 > media){
    resultado += `O numero ${number2} é maior que a media\n`
  }if (number3 > media){
    resultado += `O numero ${number3} é maior que a media\n`
  }if (number4 > media){
    resultado += `O numero ${number4} é maior que a media\n`
  }if (number5 > media){
    resultado += `O numero ${number5} é maior que a media\n`
  }if (resultado === `` ){
     resultado = "Todos os numeros são menores que a média!"
  }return resultado
}
main()