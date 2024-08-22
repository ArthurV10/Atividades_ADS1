import fs from "fs"
import { getText } from "./utils.js"

export function loadArchive(archive){
    let archiveList = archive
    while (!fs.existsSync(archiveList)){
        console.log("Arquivo Não Carregado!")
        console.log("É nescessário estar na mesma pasta")
        archiveList = getText("Digite Novamente: ")
    }
    archiveList = fs.readFileSync(archiveList, "utf8").split("\n")
    for (let i = 0; i < archiveList.length; i++ ){
        archiveList[i] = Number(archiveList[i])
    }
    return archiveList
}

export function summationList(list){
    let soma = 0
    for (let number of list){
        soma += number
    }
    return soma
}

export function calculateAverage(list){
    let soma = summationList(list)
    let qtdList = list.length
    return (soma / qtdList)
}

export function checkHigherLowerInList(list){
    let highValue = list[0]
    let lowValue = list[0]
    for (let item of list){
        if (item > highValue){
            highValue = item
        }
        else if (item < lowValue){
            lowValue = item
        }
    }
    return [`O maior numero da lista é ${highValue} `, `O menor numero da lista é ${lowValue}`]
}

export function checkPositiveNumbers(list) {
    const newList = [];
    let count = 0
    for (let number of list) {
        if (number > 0) {
            count ++
            if (!newList.includes(number)) {
                newList.push(number);
            }
        else{
            continue
        }
        }
    }
    return [newList, count]
}

export function checkNegativeNumbers(list) {
    const newList = [];
    let count = 0
    for (let number of list) {
        if (number < 0) {
            count ++
            if (!newList.includes(number)) {
                newList.push(number);
            }
        else{
            continue
        }
        }
    }
    return [newList, count]
}

export function multiplyNumbers(list, multiply){
    let newList = []
    for (let numbers of list){
        newList.push(numbers * multiply)
    }
    return newList
}