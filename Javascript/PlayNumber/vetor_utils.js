import fs from "fs"
import { getNumber, getText, saveArchive } from "./utils.js"
import { generateRandom } from "./vetor_funcionalidades .js"

export function loadArchive(archive){
    let archiveList = archive
    while (!fs.existsSync(archiveList)){
        console.log("Arquivo Não Existente!")
        console.log("É Nescessário Estar Na Mesma Pasta")
        console.log("É nova arquivo será criado")
        saveArchive(archiveList, " ", "utf8")
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
    return [`O Maior Numero Da Lista É ${highValue} `, `O Menor Numero Da Lista é ${lowValue}`]
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

export function potentialNumber(list, potential){
    let newList = []
    for (let numbers of list){
        newList.push(numbers ** potential)
    }
    return newList
}

export function fractionReduceNumber(list, fraction){
    let newList = []
    let calculate = []
    let _fraction = 0
    if (fraction.includes("/")){
        for (let item of fraction){
            if(!item.includes("/")){
                calculate.push(Number(item))
            }
        }

        _fraction = calculate[0] / calculate[1]

        for (let numbers of list){
            newList.push(numbers * _fraction)
        }
    return newList
    }
    return list
}

export function changeNegativeValueInRange(list, min, max){
    let newList = []
    for (let numbers of list){
        if (numbers < 0){
            newList.push(generateRandom(min, max))
        }
        else{
            newList.push(numbers)
        }
        
    }
    return newList
}
    
export function addNumbersInList(list, qtd){
    for (let i = 0; qtd > i; i++ ){
        let _number = getNumber("Digite o numero que deseja adicionar")
        list.push(_number)
    }
    return list
}

export function removeItemInList(list, position){
    let newList = []
    if (position === -1){
        position = 0
    }
    for (let number of list){
        if (number === list[position]){
            continue
        }
        newList.push(number)
    }
    return newList
}

export function removeItemForValueInList(list , value){
    let newList = []
    for (let number of list){
        if (number === value){
            continue
        }
        newList.push(number)
    }
    return newList
}

export function transformInString(archive) {
    let newList = "";
    for (let item of archive) {
        newList += String(item) + "\n";
    }
    return newList.trim(); // Remove a última nova linha desnecessária
}

export function sortList(list){
    //TODO: Enteder como funciona a função
    let n = list.length;
    let swapped;

    // Loop para repetir o processo até que a lista esteja ordenada
    do {
        swapped = false; // Inicialmente, assume que não há trocas

        // Percorre a lista até o penúltimo elemento
        for (let i = 0; i < n - 1; i++) {
            // Compara o elemento atual com o próximo
            if (list[i] > list[i + 1]) {
                // Se o elemento atual for maior, troca de lugar com o próximo
                let temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;

                // Marca como trocado
                swapped = true;
            }
        }

        // Reduz o comprimento da lista a ser verificada (último elemento já está ordenado)
        n--;

    } while (swapped); // Continua até que nenhuma troca seja feita

    return list;
}
