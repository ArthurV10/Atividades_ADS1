def main():
    NumeroN = int(input("Insira quantos numeros deseja na lista: "))
    
    # Verifica se foi inserido ao menos um número
    if NumeroN < 1:
        print("Quantidade de números inválida.")
        return
    
    # Primeiro número da lista
    NumeroAnterior = int(input("Digite o primeiro numero da lista: "))
    maior_numero = NumeroAnterior  # Começa com o primeiro número sendo o maior
    
    for _ in range(NumeroN - 1):  # Itera N-1 vezes porque já temos o primeiro número
        NumeroAtual = int(input("Digite o proximo numero da lista: "))
        maior_numero = VerificarMaiorNumero(NumeroAtual, maior_numero)
    
    print(f"O maior número da lista é: {maior_numero}")

def VerificarMaiorNumero(NumeroAtual, maior_numero):
    if NumeroAtual > maior_numero:
        return NumeroAtual
    else:
        return maior_numero

if __name__ == "__main__":
    main()

