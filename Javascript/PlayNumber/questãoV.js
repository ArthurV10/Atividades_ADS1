import {getNumber, getNumberInRange, pressEnter, clearScrean} from "./utils.js"
import {showMenu, executeOptionsIn1, ItensInTheValue, executeOptionsIn10} from "./vetor_funcionalidades .js"
import { summationList, calculateAverage, checkPositiveNumbers, checkHigherLowerInList, checkNegativeNumbers} from "./vetor_utils.js";

const opcoesMenu = [
    "Inicializa Vetor Numérico",
    "Mostrar Todos os Valores",
    "Resetar Vetor",
    "Ver Quantidade De Itens No Valor",
    "Ver Menor e Maior Valores e Suas Posições",
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
    "Deseja um Vetor Com Dados Automáticos",
    "Deseja Informar Valores", 
    "Carregar Arquivo"
]

const opcoesMenu3 = [
    "Multipicar Por Um Valor",
    "Elevar A Um Valor(Exponenciação)",
    "Reduzir A Uma Fração (Ex: 1/5)",
    "Substituir valores negativos entre um limite minimo e maximo",
    "Ordenar Valores",
    "Embaralhar Valores"
]
function main(){
    let list = []
    let option = 0
    while (option !== 15){
        clearScrean()
        showMenu(opcoesMenu, "|========|MENU|========|");
        option = getNumberInRange(1, 15, ">>> ");
        clearScrean()
        
        // Opção 1 é escolhida e executa o proximo menu
        let text = ""
        if (option === 1){
            showMenu(opcoesMenu2, "|====Segundo Menu|====|")
            // Pergunta qual opção dentro do menu 1 deve ser executada
            let _option = getNumberInRange(1, 3, ">>> ")
            // Executa a opção escolhida
            list = executeOptionsIn1(_option)
        }
        else if (option === 2){
            console.log(list)
        }
        else if (option === 3){
            list = []
            console.log("Lista Resetada!")
        }
        else if (option === 4){
            let value = getNumber("Digite o valor que deseja verificar: ")
            text = ItensInTheValue(list, value)
            console.log(text)
        }
        else if (option === 5){
            let _listHigherLower = checkHigherLowerInList(list)
            console.log(_listHigherLower[0]);
            console.log(_listHigherLower[1]);
        }
        else if (option === 6){
            let _value = summationList(list)
            console.log(`O somatorio é igual é ${_value}`)
        }
        else if (option === 7){
            let _average = calculateAverage(list)
            console.log(`A média é igual a ${_average}`)
        }
        else if (option === 8){
            let positiveNumber = checkPositiveNumbers(list)
            console.log (`Os numeros positivos são ${positiveNumber[0]}`)
            console.log (`A quantidade de numeros positivos são ${positiveNumber[1]}`)
        }
        else if (option === 9){
            let negativeNumber = checkNegativeNumbers(list)
            console.log (`Os numeros negativos são ${negativeNumber[0]}`)
            console.log (`A quantidade de numeros negativos são ${negativeNumber[1]}`)
        }
        else if (option === 10){
            clearScrean()
            showMenu(opcoesMenu3, "|====|Terceiro Menu|====|")
            let _option = getNumberInRange(1, 6, ">>> ")
            list = executeOptionsIn10(_option, list)
        }
        else if (option === 11){
        }
        else if (option === 12){
        }
        else if (option === 13){
        }
        else if (option === 14){
        }
        else if (option === 15){
        }
    pressEnter()
    clearScrean()
    }
    console.log("Encerrando . . .")
}
main()

