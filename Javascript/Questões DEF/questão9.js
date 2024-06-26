import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Indicador de numeros primos")

  const numero1 = pede_numero("Digite um numero de 1 a 100: ")
  let resultado = ver_se_eh_primo(numero1)

print(`
|--------- RESULTADO ----------|
|------------------------------|
                             
     --->${resultado}<---

|------------------------------|
`)
}

function ver_se_eh_primo(number){
   if (number === 100 || number === 1){
    return "O numero não é primo"
   }else if (number === 2 || number === 3 || number === 5 || number === 7){
    return "O numero é primo"
   }else if (number % 2 > 0 && number % 3 > 0 && number % 5 > 0 && number % 7 > 0 ){
    return "O numero é primo"
   }else{
   return "O numero não é primo"
   }
   
}
main()