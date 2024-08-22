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

export function getNumberInRange(mid, max, text){
    let number = getNumber(text)
    while (number < mid || number > max){
        console.log("Numero Invalido!")
        number = getNumber("Digite um numero novamente: ")
    }
    return number
}


export function getText(text){
    return String(question(text))
}

export function verificationMinMaxForNumber(min, max, number){
    while (number < min || number > max){
        console.log("Numero Anterior Invalido!")
        number = Number(question("Digite um valor entre o minimo e máximo: "))
    }
    return number
}

export function pressEnter(){
    return getText("Pressione Enter ")
}

export function clearScrean(){
   return process.stdout.write('\x1B[2J\x1B[3J\x1B[H');
}