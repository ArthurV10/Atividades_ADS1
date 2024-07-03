"""
Leia um número N, calcule e escreva os N primeiros termos da sequência de Fibonacci
(0, 1, 1, 2, 3, 5, 8, ...). O valor lido para N sempre será maior ou igual a 2.
"""

def main():
    QtdTermos = int(input("Insira quantos termos devem ser revelados: "))
    
    while QtdTermos < 2:
        print("Erro, número inválido! O número deve ser maior ou igual a 2.")
        QtdTermos = int(input("Insira novamente quantos termos devem ser revelados: "))
    
    # Inicializando os dois primeiros termos da sequência de Fibonacci
    ValorAnterior = 0
    ValorSucesor = 1

    # Imprimindo os dois primeiros termos
    print(ValorAnterior)
    print(ValorSucesor)

    # Calculando e imprimindo os termos subsequentes
    for i in range(2, QtdTermos):
        ProximoValor = ValorAnterior + ValorSucesor
        print(ProximoValor)
        ValorAnterior = ValorSucesor
        ValorSucesor = ProximoValor

if __name__ == "__main__":
    main()
