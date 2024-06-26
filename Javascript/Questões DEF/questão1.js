import { question } from "readline-sync"

function main(){

    print('Quantidade de numeros iguais')
//Entrada
    const numero1 = get_number("Digite o primeiro numero: ")
    const numero2 = get_number("Digite o segundo numero: ")
    const numero3 =get_number("Digite o terceiro numero: ")
    let solução = verificar_igualdade(numero1, numero2, numero3)

 //Saída
    print(solução) 
}

//Processamento
function print(texto){
    console.log(texto)
}

function get_number(algarismo){
    return Number(question(algarismo))
}
    
function verificar_igualdade(number1, number2, number3){
    if (number1 === number2 && number1 === number3)
        return "Existem 3 numeros iguais!"
    else if (number1 === number2 || number2 === number3 || number1 === number3)
        return "Existem 2 numeros iguais!"
    else
        return "Todos os numeros são diferentes!"
    }

    main()
        



    


    

