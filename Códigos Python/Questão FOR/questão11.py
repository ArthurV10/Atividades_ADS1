def main():
    # Entrada dos limites
    LimiteInferior = int(input("Digite o limite inferior: "))
    LimiteSuperior = int(input("Digite o limite superior: "))

    # Verificação da validade dos limites
    while LimiteInferior > LimiteSuperior:
        LimiteSuperior = int(input("Digite o limite superior maior que o limite inferior: "))

    print(f"Números primos entre {LimiteInferior} e {LimiteSuperior}:")

    # Iterar entre os limites e verificar cada número
    for numero in range(LimiteInferior, LimiteSuperior + 1):
        if e_primo(numero):
            print(numero, end= " ")

def e_primo(n):
    # Números menores ou iguais a 1 não são primos
    if n <= 1:
        return False

    # 2 e 3 são primos, então retorna True para eles
    if n <= 3:
        return True

    # Eliminar múltiplos de 2 e 3 diretamente
    if n % 2 == 0 or n % 3 == 0:
        return False

    # Usar um loop para verificar a divisibilidade começando de 5
    VerificadorDePrimo = 5
    while VerificadorDePrimo * VerificadorDePrimo <= n:
        # Verificar se n é divisível por i ou (i + 2)
        # (i + 2) é usado para pular múltiplos de 2 e 3
        if n % VerificadorDePrimo == 0 or n % (VerificadorDePrimo + 2) == 0:
            return False
        # Incrementar i por 6 para verificar apenas os números 6k ± 1
        VerificadorDePrimo += 6

    # Se nenhum divisor for encontrado, n é primo
    return True

if __name__ == "__main__":
    main()
