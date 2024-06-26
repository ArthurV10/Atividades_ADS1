import { pede_numero, print } from "../Ajuda/funções.js";


function main(){
  print("Verificar se dezena e unidade são iguais")
  
  const numero1 = pede_numero("Digite um numero de dois digitos: ")
  const resultado = dezena_unidade(numero1)
  

print(`
|--------- RESULTADO ----------|
|------------------------------|
                             
        ${resultado}

|------------------------------|
`)
}
function dezena_unidade(separação){
    let dezena = Math.floor(separação / 10)
    let unidade = (separação % 10) 
  if (dezena === unidade)
    return "A Dezena e unidade são iguais"
  else 
    return "A Dezena e unidade são diferentes"
  
    

 

}
main()