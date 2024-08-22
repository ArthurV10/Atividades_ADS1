import { getNumber, getText, pressEnter, verificationMinMaxForNumber} from "./utils.js";
import { loadArchive, multiplyNumbers } from "./vetor_utils.js";
import fs from "fs"

export function showMenu(archive, title){
    let count = 0;
    console.log(title)
    for (let pharse of archive){
        count++;
        if (count < 10){
            console.log(`|0${count} - |${pharse}`);
        }
        else{
        console.log(`|${count} - |${pharse}`);
        }
    }
}

export function executeOptionsIn1(option){
    let _numberList = []
    let rangeMid = 0
    let rangeMax = 0
    let _qtd = 0
    // Os valores que devem ser gerados, entre tal numero até tal numero
    if (option !== 3){
        rangeMid = getNumber("Digite O Valor Minimo: ")
        rangeMax = getNumber("Digite O Valor Máximo: ")
        _qtd = getNumber("Digite A Quantidade De Itens Na Lista: ")
        // Caso o valor minimo seja maior que o valor maximo, ele irá pedir novamente
        while (rangeMax < rangeMid){
            console.log("O valor minimo é superior ao máximo")
            console.log("Valor inserido é  invalido!")
            rangeMid = getNumber("Digite O Valor Minimo Novamente: ")
            rangeMax = getNumber("Digite O Valor Máximo Novamente: ")
        }
    }
    
    if (option === 1){
        // Gera uma lista automaticamente entre o range apresentado

        _numberList = GenerateRandomVectorInRange(rangeMid, rangeMax, _qtd, _numberList)
        console.log("Lista Gerada Automaticamente!")
    }
    else if(option === 2){
        // Gera uma lista manualmente
        while (_qtd > 0){
            _qtd -= 1
            // Verifica se o numero digitado esta dentro do range apresentado
            let _number = getNumber("Digite Um Numero Para Inserir Na Lista: ")
            _numberList.push(verificationMinMaxForNumber(rangeMid, rangeMax, _number))
        }
    }
    else if(option === 3){
        _numberList = (loadArchive(getText("Digite o nome do arquivo (Ex: arquivo.txt): ")))
        console.log("Arquivo Carregado!")
    }
    return _numberList
}

export function executeOptionsIn10(option, list){
    let _newNumberList = []
    if (option === 1){
        let _multiple = getNumber("Digite o numero que deseje que multiplique: ")
        _newNumberList = multiplyNumbers(list, _multiple)
    }
    else if (option === 2){

    }
    else if (option === 3){
        
    }
    else if (option === 4){
        
    }
    else if (option === 5){
        
    }
    else if (option === 6){
        
    }
    return _newNumberList
}

export function GenerateRandomVectorInRange(mid, max, qtd, list){
    for (let i = 0; i < qtd; i++ ){
        list.push(Math.floor(Math.random() * (max - mid + 1)) + mid)
    }
    return list
}

export function ItensInTheValue(list , value){
    let count = 0 
    for (let item of list){
        if (item === value){
            count ++
        }
    }
    return `Existem ${count} numero(s)`
}

