// Importar funções de utilidades
import {
    getNumber, 
    getNumberInRange, 
    pressEnter, 
    clearScrean, 
    getPositiveNumber, 
    saveArchive
} from "./utils.js"

import {showMenu, executeOptionsIn1, itensInTheValue, executeOptionsIn10} from "./vetor_funcionalidades .js"
import { summationList, calculateAverage, checkPositiveNumbers, checkHigherLowerInList, checkNegativeNumbers,addNumbersInList, removeItemInList, removeItemForValueInList} from "./vetor_utils.js";

const opcoesMenu = [
    "Inicializar Uma Lista",
    "Mostrar Todos os Valores",
    "Resetar Lista",
    "Escolher Valor Para Apresentar Quantidade na Lista",
    "Apresentar o Menor e Maior Valor",
    "Somátorio dos Valores",
    "Média dos Valores",
    "Mostrar Valores Positivos e Quantidade",
    "Mostrar Valores Negativos e Suas Quantidades",
    "Atualizar todos os valores por uma das regras",
    "Adicionar Novos Valores",
    "Remover Itens Por Valor Exato",
    "Remover Por Posição",
    "Salvar Valores Em Arquivo",
    "Sair"
];

const opcoesMenu2 = [
    "Criar Lista Automaticamente",
    "Criar Lista Manualmente", 
    "Carregar Arquivo"
]

const opcoesMenu3 = [
    "Multipicar Lista Por Um Valor",
    "Elevar A Um Valor(Exponenciação)",
    "Reduzir A Uma Fração (Ex: 1/5)",
    "Substituir valores negativos entre um limite minimo e maximo",
    "Ordenar Valores",
    "Embaralhar Valores"
]

function main(){
    clearScrean()
    let list = [[], ""]
    let option = 0
    while (option !== 15){
        clearScrean()
        showMenu(opcoesMenu, "|=====|MENU|=====|");
        option = getNumberInRange(1, 15, ">>> ");
        clearScrean()
        
        // Opção 1 é escolhida e executa o proximo menu
        let text = ""
        if (option === 1){
            showMenu(opcoesMenu2, "|=====|Segundo Menu|=====|")
            // Executa a opção escolhida
            list = executeOptionsIn1(getNumberInRange(1, 3, ">>> "), list[1])
        }
        else if (option === 2){
            console.log("O Valores São ", list[0])
        }
        else if (option === 3){
            list = [[]]
            console.log("Lista Resetada!")
        }
        else if (option === 4){
            text = itensInTheValue(list[0], getNumber("Digite o valor que deseja verificar: "))
            console.log(text)
        }
        else if (option === 5){
            console.log(checkHigherLowerInList(list[0])[0]);
            console.log(checkHigherLowerInList(list[0])[1]);
        }
        else if (option === 6){
            console.log(`O somatorio é igual é ${summationList(list[0])}`)
        }
        else if (option === 7){
            console.log(`A média é igual a ${calculateAverage(list[0])}`)
        }
        else if (option === 8){
            console.log (`Os numeros positivos são ${checkPositiveNumbers(list[0])[0]}`)
            console.log (`A quantidade de numeros positivos são ${checkPositiveNumbers(list[0])[1]}`)
        }
        else if (option === 9){
            console.log (`Os numeros negativos são ${checkNegativeNumbers(list[0])[0]}`)
            console.log (`A quantidade de numeros negativos são ${checkNegativeNumbers(list[0])[1]}`)
        }
        else if (option === 10){
            clearScrean()
            showMenu(opcoesMenu3, "|=====|Terceiro Menu|=====|")
            list[0] = executeOptionsIn10(list[0], getNumberInRange(1, 6, ">>> "))
            console.log (`Valores Atualizados!`)
        } 
        else if (option === 11){
            console.log("Lista Atual ", list[0])
            list[0] = addNumbersInList(list[0], getPositiveNumber("Digite quantos numeros deseja adicionar: "))
        }
        else if (option === 12){
            console.log("Lista Atual ", list[0])
            list[0] = removeItemForValueInList(list[0], getNumber("Digite o valor que deseja remover: "))
            console.log("Valor Removido Da Lista!")
        }
        else if (option === 13){
            console.log("Lista Atual ", list[0])
            list[0] = removeItemInList(list[0], (getPositiveNumber("Digite a posição que deseja: ") - 1))
            console.log("Item Removido Da Lista!")
        }
        else if (option === 14){
            saveArchive(list[1], list[0])
            console.log("Arquivo Salvo Manulmente")
        }
    pressEnter()
    clearScrean()
    }
    saveArchive(list[1], list[0]);
    console.log("Arquivo Salvo Automaticamente!");
    console.log("Encerrando . . .");
}
main()