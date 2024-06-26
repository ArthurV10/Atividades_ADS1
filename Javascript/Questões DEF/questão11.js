import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Escolha uma Opção, escrevendo 1, 2 ou 3")

  const opção = pede_numero("Digite a opção desejada: ")
  const numero1 = pede_numero("Digite o primeiro numero: ")
  const numero2 = pede_numero("Digite o segundo numero: ")
  const numero3 = pede_numero("Digite o terceiro numero: ")
  let resultado = opção_igual_numero(opção, numero1, numero2, numero3)

print(`
|--------- RESULTADO ----------|
|------------------------------|
                             
     ---->${resultado}<----

|------------------------------|
`)
}

function opção_igual_numero(opção, num1, num2, num3){
  if(opção > 3){
    print("Numero Invalido, Digite um dos numeros citados! ")
    return main()
  }else if (opção === 1)
    return num1
  else if(opção === 2)
    return num2
  else
    return num3
}
main()