import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("NUMERO PAR OU IMPAR")

  const numero1 = pede_numero("Digite um numero impar pu par: ")
  let resultado = par_impar(numero1)

print(`
**********|----RESPOSTA----|**********
--------------------------------------
|                                    |
|           ${resultado}             |
|                                    |
--------------------------------------
**************************************
`)
}
function par_impar (num1){
  if (num1 % 2 === 0)
    return `O numero ${num1} é PAR`
  else 
    return `O numero ${num1} é IMPAR`
}
main()