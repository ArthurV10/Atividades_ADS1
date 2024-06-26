import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Salario por horas de aula!")

  const numero1 = pede_numero("Digite a quantidade de horas de aula dadas pelo primeiro professor: ")
  const numero2 = pede_numero("Digite o valor recebido por hora do primeiro professor : ")
  const numero3 = pede_numero("Digite a quantidade de horas de aula dadas pelo segundo professor: ")
  const numero4 = pede_numero("Digite o valor recebido por hora do segundo professor: ")
  const multiplica1 = multiplicação1(numero1, numero2)
  const multiplica2 = multiplicação2(numero3, numero4)
  let resultado = maior_menor(multiplica1, multiplica2)
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

function multiplicação1(num1, num2){
  return (num1 * num2)
}

function multiplicação2(num3, num4){
  return (num3 * num4)
}

function maior_menor(number1, number2){
  if (number1 > number2)
    return `O maior salario é do primeiro professor
                     ${number1}                    `
  else if (number1 === number2)
    return "Os salarios são iguais"
  else 
    return `O maior salario é do segundo professor
                       ${number2}                 `
}

main()