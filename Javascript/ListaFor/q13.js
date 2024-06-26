// Leia N e uma lista de N números e escreva o maior número da lista.
import {pede_numero, pede_numero_positivo, pede_numero_positivo_com_zero} from "../Ajuda/funções.js";

function main() {
    // Entrada
    let qtdNumeros = pede_numero_positivo("Insira a quantidade de numeros na lista: ");
    let valorAnterior = null;
    
    // Entrada dos numeros na lista
    for (let i = 0; i < qtdNumeros; i ++) {
        let numeroAtual = pede_numero(`Insira o numero ${i + 1}: `);
        // Processamento: Comparar valores e definir novo maior numero
        if (valorAnterior == null || valorAnterior < numeroAtual){
            valorAnterior = numeroAtual;
        }
    }
    // Saída
    console.log(`O maior numero da lista é ${valorAnterior}`);
}
main();