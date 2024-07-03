"""
Leia N, calcule e escreva o maior quadrado menor ou igual a N.
Por exemplo, se N for igual a 38, o maior quadrado menor que 38 é 36 (quadrado de 6).
"""

def main():
    # Solicita ao usuário que insira um número para encontrar o maior quadrado menor ou igual a ele
    NumeroRaiz = int(input("Insira um número para descobrir o maior quadrado menor ou igual ao número escolhido: "))
    # Chama a função DescobrirMaiorRaiz para realizar o cálculo e atribui o resultado a MaiorRaiz (não utilizado posteriormente)
    MaiorRaiz = DescobrirMaiorRaiz(NumeroRaiz)

def DescobrirMaiorRaiz(RaizQuadradaEscolhida):
    # Inicializa variáveis para armazenar o maior quadrado e o número correspondente
    MaiorRaiz = None
    NumeroDaMaiorRaiz = None
    
    # Itera de RaizQuadradaEscolhida até 1 (em ordem decrescente)
    for numero in range(RaizQuadradaEscolhida, 0, -1):
        # Calcula a raiz quadrada do número atual
        raiz = numero ** 0.5
        # Verifica se a raiz calculada é um número inteiro (ou seja, um quadrado perfeito)
        if raiz == int(raiz):
            # Se for um quadrado perfeito, armazena o valor da raiz (inteiro) e o número correspondente
            MaiorRaiz = int(raiz)
            NumeroDaMaiorRaiz = numero
            # Interrompe o loop após encontrar o maior quadrado perfeito
            break
    
    # Imprime o resultado encontrado
    if MaiorRaiz is not None:
        print(f"O maior quadrado menor ou igual a {RaizQuadradaEscolhida} é {MaiorRaiz}² = {NumeroDaMaiorRaiz}")
    else:
        print(f"Não há quadrados perfeitos menores ou iguais a {RaizQuadradaEscolhida}")

if __name__ == "__main__":
    main()


