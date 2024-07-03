def main():
    # Inicializa a soma
    Soma = 0.0
    
    # Define os numeradores e denominadores
    for numerador in range(1, 100, 2):  # Começa em 1, vai até 99, passo de 2 em 2
        denominador = (numerador + 1) // 2  # Calcula o denominador
        Soma += numerador / denominador
    
    # Exibe o resultado
    print(f"O valor de S é: {Soma}")

if __name__ == "__main__":
    main()

