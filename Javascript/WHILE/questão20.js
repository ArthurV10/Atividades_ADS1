//Considere que um carro vai fazer uma viagem entre duas cidades e que a distância a ser percorrida é de
//600 km. No início da viagem, o carro está com o tanque cheio (50 litros). Durante o percurso foi usado
//um aparelho para medir o desempenho do carro, que mostrava, quando acionado, duas informações:

//· Distância percorrida desde a última medição;
//· Quantidade de litros consumidos para percorrer a distância indicada.

//Escreva um algoritmo que leia estas informações e escreva:

//· se o carro chegou ao seu destino (distância percorrida maior ou igual a 600 km);
//· se o carro parou antes de chegar por falta de combustível (consumo igual a 50 litros);
//· o consumo em km/l do carro.
import { print, pede_numero_positivo } from "../Ajuda/funções.js";

function main() {
    print(`
    ====================
    ANALISE DO COMBUSTIVEL
    ====================
    `);
    //Entrada
    let distância_entre_cidades = pede_numero_positivo("Digite quantos Km deseja percorrer: ")
    let combustivel_abastecido = pede_numero_positivo("Digite quantos Litros foram abastecidos: ")

    //Variaveis
    let distância = 0;
    let combustivel_consumido = 0;

    //Processamento
    let resultado = ""
    print(`
    =================================================
    Distancia Almejada = ${distância_entre_cidades}
    Combustivel Inicial = ${combustivel_abastecido}
    ==================================================`)

    while (distância < distância_entre_cidades && combustivel_consumido < combustivel_abastecido) {
        distância += pede_numero_positivo("Digite quantos Km já foram percorridos: ")
        combustivel_consumido += pede_numero_positivo("Digite a quantidade de combustível gasta: ")
        let resposta_parcial = `
        ================================================
        Distância Percorrida = ${distância}
        Combustível Consumido = ${combustivel_consumido}
        ================================================`
        print(resposta_parcial)
    }
    if (distância >= distância_entre_cidades) {
        resultado = `
    O Carro Conseguiu Alcançar Seu Objetivo!
        `
    } else {
        resultado = `
    O Carro Não Conseguiu Chegar ao Seu Objetivo!
    (Por Falta de Combustivel!)
        `
    }

    //Saida
    const resposta = `
    ************************************
    ====================================
    ${resultado}
    ====================================
    ************************************
    `
    print(resposta)
}
main();
