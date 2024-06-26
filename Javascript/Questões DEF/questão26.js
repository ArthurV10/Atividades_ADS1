import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("INDICADOR DA HIPOTENUSA E DOS CATETOS!")

  const lado1 = pede_numero("Digite o primeiro lado: ")
  const lado2 = pede_numero("Digite o segundo lado: ")
  const lado3 = pede_numero("Digite o terceiro lado: ")
  const analise = analise_dos_lados(lado1, lado2, lado3)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
${analise}                                
--------------------------------------
**************************************
`)

  if (lado1 === 0 || lado2 === 0||lado3 === 0){
    print("Não existe lado igual a 0 no triangulo!")
    return main()
  }else
    return print(aparecer_final)
}

function analise_dos_lados(num1, num2, num3) {
  if ((num1 ** 2) === (num2 ** 2) + (num3 ** 2))
    return `A hipotenusa é ${num1} e os catetos são ${num2} e ${num3}`
  else if ((num2 ** 2) === (num1 ** 2) + (num3 ** 2))
    return `A hipotenusa é ${num2} e os catetos são ${num1} e ${num3}`
  else if ((num3 ** 2) === (num1 ** 2) + (num2 ** 2))
    return `A hipotenusa é ${num3} e os catetos são ${num1} e ${num2}`
  else 
    return `As medidas informas não formam um triangulo que possua hipotenusa` 
}
main()