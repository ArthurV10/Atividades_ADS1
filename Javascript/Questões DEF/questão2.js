import { print, pede_numero } from "../Ajuda/funções.js"

function main(){
  print("ANALISE DE QUAL NUMERO É MAIOR E QUAL É MENOR!")

  const numero1 = pede_numero("Digite o primeiro numero: ")
  const numero2 = pede_numero("Digite o segundo numero: ")
  const resultado = maior_menor(numero1,numero2)
  
  print(resultado)
}

function maior_menor(num1, num2){
  if (num1 > num2)
    return `O maior numero é ${num1}, e o menor é ${num2} !`
  else if (num1 === num2)
    return `Os numeros são iguais!`
  else 
    return `O maior numero é ${num2}, e o menor é ${num1} !`
    
}
main()
