import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Indicar a area pelos pontos X e Y")

  const x1 = pede_numero("Digite o ponto 'X' do primeiro conjunto: ")
  const y1 = pede_numero("Digite o ponto 'Y' do primeiro conjunto: ")
  const x2= pede_numero("Digite o ponto 'X' do segundo conjunto: ")
  const y2= pede_numero("Digite o ponto 'Y' do segundo conjunto: ")
  const calculo = calculo_da_area(x1, y1, x2, y2)
   const aparecer_final = (`
*********|----RESPOSTA----|*********
--------------------------------------
  ${calculo}                                
--------------------------------------
**************************************
`)

print(aparecer_final)
}

function calculo_da_area(x1, y1, x2, y2){
    const x = Math.abs(x1 - x2)
    const y = Math.abs(y1 - y2)
    const area_do_retangulo = (x * y)
    if(area_do_retangulo < 0)
      return `A area doretangulo não pode ser negativa`
    else
      return `A area do triangulo é ${area_do_retangulo}`
    
}
main()