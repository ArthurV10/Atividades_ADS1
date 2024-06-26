import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Analise de Triangulo")

  const numero1 = pede_numero("Digite o primerio angulo: ")
  const numero2 = pede_numero("Digite o segundo angulo: ")
  const numero3 = pede_numero("Digite o quarto angulo: ")
  const triangulo = verificar_se_eh_triangulo(numero1, numero2, numero3)
  let tipo_de_triangulo = classificar (numero1, numero2, numero3)
  
print(`
|--------- RESULTADO ----------|
|------------------------------|
                             
  --->${tipo_de_triangulo}<---

|------------------------------|
`)
}

function verificar_se_eh_triangulo(num1, num2, num3){
  let soma = (num1 +num2+ num3)
  if(num1 === 0 || num2 === 0 || num3 === 0 ){
    print("Não é um triangulo, tente novamente...")
    return main()}
  else if (soma === 180)
    return 
  else 
    print ("Não é um triangulo, tente novamente...")
    return main()
  
}
  
function classificar(number1, number2, number3){
  if (number1 < 90 && number2 < 90 && number3 < 90 )
    return `O triangulo é acutangulo!`
  else if(number1 === 90 || number2 === 90 || number3 === 90)
    return `O triangulo é retangulo`
  else 
    return `O triangulo é obtusangulo`
}
main()