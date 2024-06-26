import { pede_numero, print } from "../Ajuda/funções.js";

function main(){
  print("Calcular raizes de A, B e C em uma funçao do 2º grau")

  const numeroA = pede_numero("Digite o valor do coeficiente 'A':  ")
  const numeroB = pede_numero("Digite o valor do coeficiente 'B':  ")
  const numeroC = pede_numero("Digite o valor do coeficiente 'C':  ")
  const delta = calcular_delta(numeroA, numeroB, numeroC)

  if(numeroA === 0){
    print(`
===================================================
O coeficiente deve possuir valor diferente de zero
Tente novamente....
===================================================
  `)
    return main()
  }else if(delta < 0){
    print(`
    ====================
    Não existe raiz real
    ====================
    `)
 } else {
    let raiz = calcular_bask(delta, numeroA, numeroB)
    const aparecer_final = (`
*********|----RESPOSTA----|*********
-------------------------------------

${raiz}             
                            
--------------------------------------
**************************************
`)
    return print(aparecer_final)
  }
}

function calcular_delta(a, b, c){
  const delta = (b**2) - (4 * a * c)
      return delta
}

function calcular_bask(delta, a, b) {
  const raiz_delta = Math.sqrt(delta)
  if(raiz_delta < 0)
    return `Não existe raiz`
  if (raiz_delta === 0) {
      const raiz1 = -b / (2 * a)
      return `Existe apenas uma raiz: ${raiz1}`
  }else {
      const raiz1 = (-b + raiz_delta) / (2 * a)
      const raiz2 = (-b - raiz_delta) / (2 * a)
      return `Existem duas raizes: ${raiz1.toFixed(2)}, ${raiz2.toFixed(2)}`
    }
  }
main()
