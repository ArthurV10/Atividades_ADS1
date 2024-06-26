import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Indicar idade apartir do nascimentos e anoa atual")

  const dia1 = pede_numero("Digite o dia do nascimento: ")
  const mes1 = pede_numero("Digite o mes do nascimento: ")
  const ano1 = pede_numero("Digite o ano do nascimento: ")
  const dia2 = pede_numero("Digite o dia atual: ")
  const mes2 = pede_numero("Digite o mes atual: ")
  const ano2 = pede_numero("Digite o ano atual: ")
  const analise_dia = calculo_dia(dia1, dia2)
  const analise_mes = calculo_mes(mes1, mes2)
  const analise_ano = calculo_ano(dia2, mes2, ano2, dia1, mes1, ano1)
  const aparecer_final = (`
*********|----RESPOSTA----|*****************
--------------------------------------------
Essa pessoa tem ${analise_ano} ano/s, ${analise_mes} mes/es e ${analise_dia} dia/s                            
--------------------------------------------
********************************************
`)


  if(dia1 > 31 || dia2 > 31 || mes1 > 12 || mes2 > 12 || dia1 === 0 || dia2 === 0 || mes1 === 0 || mes2 === 0)
    return print(`
==============================
A data apresentada não existe
===============================`)

  else if (mes1 === 2)
    if (dia1 <= 28 || (ano1 % 4 === 0 && dia1 <= 29))
      return print('A data é valida!')
  else
    return print(`
==============================
A data apresentada não existe
===============================`)

  else if (mes2 === 2)
    if (dia2 <= 28 || (ano2 % 4 === 0 && dia2 <= 29))
      return print('A data é valida!')

  else if(mes1 === 1 || mes1 === 3 || mes1 === 5 || mes1 === 7 || mes1 === 10 || mes1 === 12)
    if (dia1 <= 31)
      return print('A data é valida!')
  else 
      return print(`
==============================
A data apresentada não existe
===============================`)

  else if(mes2 === 1 || mes2 === 3 || mes2 === 5 || mes2 === 7 || mes2 === 10 || mes2 === 12)
    if (dia2 <= 31)
      return print('A data é valida!')
    else 
      return print(`
==============================
A data apresentada não existe
===============================`)

  else if(mes1 === 4 || mes1 === 6 || mes1 === 9 || mes1 === 11)
    if (dia1 <= 30)
      return print('A data é valida!')
    else 
      return print('A data é valida!')
  else if(mes2 === 4 || mes2 === 6 || mes2 === 9 || mes2 === 11)
    if (dia2 <= 30)
      return print('A data é valida!')
    else 
      return print('A data é valida!')

    print(aparecer_final)
}

function calculo_dia(dia1, dia2){
      return Math.abs(dia1 - dia2)
}

function calculo_mes(mes1, mes2){
    let mes = ``
    if(mes1 > mes2){
        mes = Math.abs(mes1 - mes2)
        return (12 - mes)
      }else 
        mes = Math.abs(mes1 - mes2)
        return mes
}

function calculo_ano(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento){
    let idade = ano_atual - ano_nascimento
    if(idade <= 0){
        return "Impossivel de existir!"
    }else if(mes_atual < mes_nascimento){
       return (idade - 1)
    }else if(mes_atual >= mes_nascimento){
       idade + 1
    }else{
    }if (dia_atual < dia_nascimento){
        return (idade - 1)
    }else{
        return (idade)
    }
}

main()