import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Ordenar Crescentemente")

  const numero1 = pede_numero("Digite o primeiro numero: ")
  const numero2 = pede_numero("Digite o segundo numero: ")
  const numero3 = pede_numero("Digite o terceiro numero: ")
  let resultado = ordenador_crescente(numero1, numero2, numero3)

print(`
|--------- RESULTADO ----------|
|------------------------------|
                             
         ORDEM CRESCENTE
           ${resultado}

|------------------------------|
`)
}

function ordenador_crescente(num1, num2, num3){
  if (num1 === num2 && num1 === num3){
    print("Todos os numeros são iguais, tente novamente...")
    return main()}
  else
  if (num1 > num2 && num2 > num3)
    return `${num3}, ${num2}, ${num1}`
  else if (num1 > num2 && num3 > num2)
    return `${num2}, ${num3}, ${num1}`
  else if (num2 > num1 && num1 > num3)
    return `${num3}, ${num1}, ${num2}`
  else if (num2 > num3 && num3 > num1)
    return `${num1}, ${num3}, ${num2}`
  else if (num3 > num1 && num1 > num2)
    return `${num2}, ${num1}, ${num3}`
  else  
      return `${num1}, ${num2}, ${num3}`
  

}
main()