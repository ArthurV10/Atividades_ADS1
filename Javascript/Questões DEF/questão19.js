import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Calculadora de IMC")

  const peso = pede_numero("Digite o peso em Kg: ")
  const altura = pede_numero("Digite a altura em Metros: ")
  const IMC = (calcular_imc(peso, altura).toFixed(2))
  let resultado = avaliar_imc(IMC)

   const resposta = (`
**********|----RESPOSTA----|**********
--------------------------------------
      SEU IMC É IGUAL: ${IMC}                            
    ${resultado}                        
--------------------------------------
**************************************
`)

  if(altura < 3,5 || peso < 595){
    return print (resposta)
  }else 
  print(`
=================================================
Alguma das medidas estão fora dos limites humanos
=================================================
    `)
    return main()
}

function calcular_imc(peso, altura){
    return(peso /(altura ** 2))
}

function avaliar_imc(imc){
  if(imc <= 25)
    return `Seu peso esta normal (IMC Abaixo de 25)`
  else if(imc > 25)
    return `Seu peso correponde a Obeso (IMC Entre 25 e 30 )`
  else
    return `Seu peso corresponde a Obesidade Morbida (IMC acima de 30)`
}
main()