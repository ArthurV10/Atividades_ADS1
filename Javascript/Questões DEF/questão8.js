import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Indicador de Idade")

  const numero1 = pede_numero("Digite o dia atual: ")
  const numero2 = pede_numero("Digite o mês atual: ")
  const numero3 = pede_numero("Digite o ano atual: ")
  const numero4 = pede_numero("Digite o dia do nascimento: ")
  const numero5 = pede_numero("Digite o mês do nascimento: ")
  const numero6 = pede_numero("Digite o ano do nascimento: ")
  let idade_atual = calcular(numero1, numero2, numero3, numero4, numero5, numero6)

print(`
|--------- RESULTADO ----------|
|------------------------------|
         SUA IDADE É:          
--------->${idade_atual}<---------

|------------------------------|
`)
}

function calcular(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento){
  let idade = ano_atual - ano_nascimento
  if(idade <= 0){
      return "Impossivel de existir!"
  }else if(mes_atual < mes_nascimento){
     return (idade - 1)
  }else if(mes_atual >= mes_nascimento){
     idade + 1
  }else{
  }if (dia_atual < dia_nascimento){
      return (idade - 1)
  }else{
      return (idade)
  }
}

main()