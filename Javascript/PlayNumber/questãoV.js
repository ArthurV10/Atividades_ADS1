import { question } from "readline-sync";

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

function main(){
    let answer = "s";
    while (answer == "s"){
        showMenu(opcoesMenu, "|========|MENU|========|");
        let number = Number(question(">>> "));
        answer = String(question("Deseja continuar?(S/N): "))
        }
        
    }

function showMenu(archive, title){
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

function executeOption(option){
    // Opção 1 é escolhida e executa o proximo menu
    if (option == 1){
        showMenu(opcoesMenu2)
        // Pergunta qual opção dentro do menu 1 deve ser executada
        let _option = Number(question(">>>"))
        // Executa a opção escolhida
        executeOptionsIn1(option)

    }
    if (option == 2){
        
    }
    if (option == 3){
        
    }
    if (option == 4){
        
    }
    if (option == 5){
        
    }
    if (option == 6){
        
    }
    if (option == 7){
        
    }
    if (option == 8){
    
    }
    if (option == 9){
        
    }
    if (option == 10){
        
    }
    if (option == 11){
        
    }
    if (option == 12){
        
    }
    if (option == 13){
        
    }
    if (option == 14){
        
    }
    if (option == 15){
        
    }

}

function executeOptionsIn1(option){
    let _number = []
    // Os valores que devem ser gerados, entre tal numero até tal numero
    let rangeMid = Number(question("Digite o Valor Minimo: "))
    let rangeMax = Number(question("Digite o Valor Máximo: "))
    if (option == 1){
        // Gera uma lista automaticamente entre o range apresentado
        _number.push(GenerateRandomVectorInRange(rangeMid, rangeMax))
    elif (option == 2){
        //
    }
    }
}
