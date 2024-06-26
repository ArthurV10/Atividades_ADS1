import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("***ANALISE DE BOLETIM***")

  const numero1 = pede_numero("Digite a primeira nota: ")
  const numero2 = pede_numero("Digite a segunda nota : ")
  const media = calcular_media(numero1, numero2)
  const media_valida = verificar_media(media)
  const media_nova = calcular_media_nova(media_valida, media)
  const prova_final = validar_prova_final(media_nova)
  let resultado = (`
  **********|----RESPOSTA----|**********
  --------------------------------------
     °Nota 1º = ${numero1}                               
     °Nota 2º = ${numero2}   
     ----------------------
     °Media = ${media}
     °Resultado = ${media_valida} 
     °Media Prova Final = ${media_nova}          
     ${prova_final}
  --------------------------------------
  **************************************
  `)

  if (numero1 <= 10 && numero2 <= 10){
    return print(resultado)
  }else(numero1 > 10 || numero2 > 10)
    print(`
    ---------------------------------------------------------------
    Os Numeros Digitados Fogem do Valor Maximo do Padrão de Notas!
    ---------------------------------------------------------------
    `)
    return main()
}

function calcular_media (num1, num2){
    return ((num1 + num2) / 2)
}

function verificar_media (media){
  if (media >= 7)
    return "APROVADO"
  else 
      print("PROVA FINAL")
    return pede_numero("Digite a nota da Prova final: ")
}

function calcular_media_nova(nota_pf, media){
    return ((nota_pf + media) / 2)
}

function validar_prova_final(media_nova){
  let resultado = ``
  if (media_nova >= 5 )
    return resultado = "APROVADO POS PROVA FINAL!"
  else if (media_nova > 0)
    return resultado = "REPROVADO" 
  else
    return ``
}
main()