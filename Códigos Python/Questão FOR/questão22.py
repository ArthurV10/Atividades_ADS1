def main():
    QtdDados = int(input("Insira quantos dados devem ser lidos: "))
    
    # Inicialização dos valores para representar o menor e o maior peso possíveis
    pesoMagro = float(('inf'))  # Inicializa com o maior valor possível
    pesoGordo = float('-inf')  # Inicializa com o menor valor possível
    
    identificaçãoMagro = 0
    identificaçãoGordo = 0
    
    for Boi in range(QtdDados):
        identificação = int(input("Digite o numero de Identificação do Boi: "))
        Peso = float(input("Digite o peso do Boi: "))
        
        # Verifica se é o boi mais gordo
        if Peso > pesoGordo:
            pesoGordo = Peso
            identificaçãoGordo = identificação
        
        # Verifica se é o boi mais magro
        if Peso < pesoMagro:
            pesoMagro = Peso
            identificaçãoMagro = identificação
    
    # Exibe os resultados
    print(f"""
    =============================================
    Boi Mais Gordo
    =======================
    Numero da Identificação: {identificaçãoGordo}
    Peso: {pesoGordo}

    Boi Mais Magro
    =======================
    Numero da Identificação: {identificaçãoMagro}
    Peso: {pesoMagro}
    ==============================================
    """)

if __name__ == "__main__":
    main()
