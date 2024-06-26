import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Informa qual quadrante esta angulo informado")

  const numero1 = pede_numero("Informe o angulo desejado: ")
  let resultado = quadrante(numero1)
   const resposta = (`
**********|----RESPOSTA----|**********
--------------------------------------
                                  
     ${resultado}             
                                  
--------------------------------------
**************************************
`)
  if(numero1 <= 360)
    return print(resposta)
  else 
    print(`
==============================================================
O angulo correspondente não pode estar dentro da um quadrante!
==============================================================
    `)
    return main()
}

function quadrante(angulo){
  if(angulo <= 90)
    return `O angulo esta no 1º quadrante`
  else if(angulo <= 180)
    return `O angulo esta no 2º quadrante `
  else if (angulo <= 270)
    return `O angulo esta no 3º quadrante`
  else
    return `O angulo esta no 4° quadrante`
}
main()