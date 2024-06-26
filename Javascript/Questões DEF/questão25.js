import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Verificar acesso de senha")

  const senha1 = pede_numero("Digite apenas a hora inicial: ")
  const senha2 = pede_numero("Digite apenas os minutos iniciais: ")
  const senha3 = pede_numero("Digite apenas a hora final: ")
  const senha4 = pede_numero("Digite apenas os minutos finais: ")
  const acesso = verificar_acesso(senha1, senha2, senha3, senha4)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
    A senha colocada foi:
       ${senha1}${senha2}${senha3}${senha4}                        
 
  Acesso : ${acesso}                                
--------------------------------------
**************************************
`)

print(aparecer_final)
}

function verificar_acesso(num1, num2, num3, num4){
  if(num1 === 1 && num2 === 2 && num3 === 3 && num4 == 4)
    return `LIBERADO!`
  else 
    return `NEGADO!`
}
main()