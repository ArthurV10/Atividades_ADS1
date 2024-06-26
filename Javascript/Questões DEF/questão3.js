import { pede_numero, print } from "../Ajuda/funções.js";

  

function main(){
  print("!Indicar qual é o maior número!")

  const numero1 = pede_numero("Digite o primeiro numero: ")
  const numero2 = pede_numero("Digite o segundo numero: ")
  const numero3 = pede_numero("Digite o terceiro numero: ")
  let resultado = maior_numero(numero1, numero2, numero3)

print(`
|--------- RESULTADO ----------|
|------------------------------|
               
        O Maior Número é
      --->${resultado}<---

|------------------------------|
    `)
}
function maior_numero(num1, num2, num3){
  if(num1 === num2 && num1 === num3)
    return num1
  else if(num1 > num2 && num1 > num3)
    return num1
  else if(num2 > num1 && num2 > num3)
    return num2
  else (num3 > num1 && num3 > num2)
    return num3
  

}
main()