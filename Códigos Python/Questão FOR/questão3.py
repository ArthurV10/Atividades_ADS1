def verificar_valor_positivo(X):
    while X < 0:
        import os
        os.system('cls')
        print("Valor Invalido!")
        X = int(input("Digite novamente: "))
    return X

valor_inicial = verificar_valor_positivo(int(input("Digite o valor inicial da PA: ")))
valor_razão = verificar_valor_positivo(int(input("Digite o valor da razão: ")))
valor_limite = verificar_valor_positivo(int(input("Digite quantos numeros devem ser impressos: ")))

for valor_Pa in range(valor_limite):
    print(valor_inicial)
    valor_inicial += valor_razão
print("Encerrando Programa...")