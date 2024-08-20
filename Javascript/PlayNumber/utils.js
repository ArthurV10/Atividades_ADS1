import { question } from "readline-sync";

export function getNumber(text){
    return Number(question(text))
}

export function getPositiveNumber(text){
    let number = Number(question(text))
    while (number < 0){
        console.log("Numero Negativo, Invalido!")
        number = Number(question("Digite Novamente: "))
    }
    return number
}

export function getNegativeNumber(text){
    let number = Number(question(text))
    while (number > 0){
        console.log("Numero Positvo, Invalido!")
        number = Number(question("Digite Novamente: "))
    }
    return number
}

export function getText(text){
    return String(question(text))
}