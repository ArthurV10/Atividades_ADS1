def main():
    # Entrada do número N
    NumeroN = int(input("Digite o valor de N: "))
    
    # Inicializa a soma
    Soma = 0.0
    
    # Calcula a soma da série com sinais contrarios
    for numero in range(1, NumeroN + 1):
        if numero % 2 == 0:
            Soma -= 1 / numero
        else:
            Soma += 1 / numero
    
    # Exibe o resultado
    print(f"O valor de S é: {Soma}")

if __name__ == "__main__":
    main()
