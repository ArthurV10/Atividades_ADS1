def main():
    # Entrada do número N
    NumeroN = int(input("Digite o valor de N: "))
    
    # Inicializa a soma
    Soma = 0.0
    
    # Calcula a soma da série harmônica
    for denominador in range(1, NumeroN + 1):
        Soma += 1 / denominador
    
    # Exibe o resultado
    print(f"O valor de S é: {Soma}")

if __name__ == "__main__":
    main()
