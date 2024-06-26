import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Quantas horas durou o jogo(sem execeder 24 horas) ")

  const hora1 = pede_numero("Digite apenas a hora inicial: ")
  const min1 = pede_numero("Digite apenas os minutos iniciais: ")
  const hora2 = pede_numero("Digite apenas a hora final: ")
  const min2 = pede_numero("Digite apenas os minutos finais: ")
  const calculo_hr = calculo_hora(hora1, hora2)
  const calculo_min = calculo_minuto (min1, min2)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
                                  
As horas do jogo são ${calculo_hr}:${calculo_min}         
                                  
--------------------------------------
**************************************
`)
 if(hora1 >24 || hora2 >24 || min1 >59 || min2 > 59){
    print(`
===============================
A HORA DIGITADA NÃO É EXISTENTE
===============================
    `)
    return main()
 }else 
    return print(aparecer_final)
}

function calculo_hora(num1,num2){
  if( num1 === 0 && num2 === 0){
    num1 = 0
    num2 = 0
  }else 
  if(num1 === 0)
    num1 = 24
  if(num2 === 0)
    num2 = 24
  const hora = Math.abs(num1 - num2)
  const hora_final = (24 - hora)
    return hora_final
}

function calculo_minuto(minuto1, minuto2){
  const min = Math.abs(minuto1 - minuto2)
    return min
}
main()