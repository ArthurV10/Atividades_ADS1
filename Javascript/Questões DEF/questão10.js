import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Data Valida ou Invalida")

  const numero1 = pede_numero("Digite o dia: ")
  const numero2 = pede_numero("Digite o numero do mes: ")
  const numero3 = pede_numero("Digite o ano: ")
  let resultado = verificar_validade(numero1, numero2, numero3)

print(`
|--------- RESULTADO ----------|
|------------------------------|
                             
--------->${resultado}<--------

|------------------------------|
`)
}

function verificar_validade(dia, mes, ano){
  if(dia > 31 || mes > 12)
      return "O numero digitado é invalido"
  else if (mes === 2)
    if (dia <= 28 || (ano % 4 === 0 && dia <= 29))
      return "Data é Valida"
    else
      return "Data é Invalida"
  else if(mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 10 || mes === 12)
    if (dia <= 31)
      return "Data é Valida"
    else 
      return "Data é Invalida"
  else if(mes === 4 || mes === 6 || mes === 9 || mes === 11)
    if (dia <= 30)
      return "Data é Valida"
    else 
      return "Data é Valida"

}
main()
