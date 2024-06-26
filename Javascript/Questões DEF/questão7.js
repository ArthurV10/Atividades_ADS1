import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Analise de Triangulo")

  const numero1 = pede_numero("Digite o primerio lado: ")
  const numero2 = pede_numero("Digite o segundo lado: ")
  const numero3 = pede_numero("Digite o quarto lado: ")
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
  if (num1 === 0 || num2 === 0 || num3 === 0 ){
    print("Não é triangulo, tente novamente...")
    return main()
  }else if(num1 + num2 >= num3 && num1 + num3 >= num2 && num2 + num3 >= num1 )
    return
  else 
    print("Não é triangulo, tente novamente...")
    return main()
}
  
function classificar(number1, number2, number3){
  if (number1 === number2 && number1 === number3 )
    return `O triangulo é equilatero!`
  else if(number1 != number2 && number2 != number3 && number3 != number1)
    return `O triangulo é escaleno`
  else 
    return `O triangulo é isoceles`
}
main()