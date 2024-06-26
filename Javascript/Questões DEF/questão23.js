import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Informe a data mais recente")

  const dia1 = pede_numero("Informe o dia da primeira data desejada: ")
  const mes1 = pede_numero("Informe o mes da primeira data desejada: ")
  const ano1 = pede_numero("Informe o ano da primeira data desejada: ")
  const dia2 = pede_numero("Informe o dia da segunda data desejada: ")
  const mes2= pede_numero("Informe o mes da segunda data desejada: ")
  const ano2 = pede_numero("Informe o ano da segunda data desejada: ")
  const possibilidade_resultado1 = verificar_ano(ano1, ano2)
  const possibilidade_resultado2 = verificar_mes(mes1, mes2)
  const possibilidade_resultado3 = verificar_dia(dia1, dia2, ano1, ano2, mes1, mes2)

  if(dia1 > 31 || dia2 > 31 || mes1 > 12 || mes2 > 12)
      return print(`
==============================
A data apresentada não existe
===============================`)
  else if (mes1 === 2)
    if (dia1 <= 28 || (ano1 % 4 === 0 && dia <= 29))
      return print("A data é valida!")
    else
    return print(`
==============================
A data apresentada não existe
===============================`)
    else if (mes2 === 2)
      if (dia2 <= 28 || (ano2 % 4 === 0 && dia2 <= 29))
         return print("A data é valida!")
      else if(mes1 === 1 || mes1 === 3 || mes1 === 5 || mes1 === 7 || mes1 === 10 || mes1 === 12)
    if (dia1 <= 31)
      return print("A data é valida!")
    else 
      return print(`
==============================
A data apresentada não existe
===============================`)
    else if(mes2 === 1 || mes2 === 3 || mes2 === 5 || mes2 === 7 || mes2 === 10 || mes2 === 12)
      if (dia2 <= 31)
        return print("A data é valida!")
      else 
        return print(`
==============================
A data apresentada não existe
===============================`)
    else if(mes1 === 4 || mes1 === 6 || mes1 === 9 || mes1 === 11)
      if (dia1 <= 30)
        return print("A data é valida!")
    else 
        return print("A data é valida!")
    else if(mes2 === 4 || mes2 === 6 || mes2 === 9 || mes2 === 11)
      if (dia2 <= 30)
        return print("A data é valida!")
      else 
        return print("A data é valida!")
}

function verificar_ano(ano1, ano2){
  if (ano1 === ano2)
    return 
  if (ano1 > ano2)
    return print(`
**********|----RESPOSTA----|**********
--------------------------------------
                                  
     A primeira data é mais recente
                                  
--------------------------------------
**************************************
`)
  if (ano1 < ano2)
    return print(`
  **********|----RESPOSTA----|**********
  --------------------------------------
                                    
     A segunda data é mais recente
                                    
  --------------------------------------
  **************************************
  `)
}
  
function verificar_mes(mes1, mes2){
  if (mes1 === mes2)
    return 
  if (mes1 > mes2)
    return print(`
**********|----RESPOSTA----|**********
--------------------------------------
                                  
     A primeira data é mais recente
                                  
--------------------------------------
**************************************
`)
  if (mes1 < mes2)
    return print(`
  **********|----RESPOSTA----|**********
  --------------------------------------
                                    
     A segunda data é mais recente
                                    
  --------------------------------------
  **************************************
  `)
}

function verificar_dia(dia1, dia2, mes1, mes2, ano1, ano2){
  if (dia1 === dia2 && mes1 === mes2 && ano1 === ano2)
    return print(`
**********|----RESPOSTA----|**********
--------------------------------------

          As datas são iguais!
                                      
--------------------------------------
**************************************
    `)
  if (dia1 > dia2)
    return print(`
**********|----RESPOSTA----|**********
--------------------------------------
                                        
     A primeira data é mais recente
                                        
--------------------------------------
**************************************
      `)
  if (dia1 < dia2)
    return print(`
**********|----RESPOSTA----|**********
--------------------------------------
                                    
     A segunda data é mais recente
                                    
--------------------------------------
**************************************
  `)
}
main()