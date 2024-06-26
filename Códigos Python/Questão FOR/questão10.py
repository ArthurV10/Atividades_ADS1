def verificar_valor_positivo(X):
    while X < 0:
        import os
        os.system('cls')
        print("Valor Invalido!")
        X = int(input("Digite novamente: "))
    return X
print("Mostra os numeros impares entre os limites superiores e inferiores!")
limite_superior = verificar_valor_positivo(int(input("Digite o valor do limite superior: ")))
limite_inferior = verificar_valor_positivo(int(input("Digite o valor do limite inferior: ")))

while limite_superior <= limite_inferior:
    import os
    os.system('cls')
    print("O limite superior não pode ser menor ou igual ao  limite inferior")
    limite_superior = limite_superior = verificar_valor_positivo(int(input("Digite novamente o valor do limite superior: ")))

for i in range(limite_inferior, limite_superior + 1):
    if i % 2 != 0:
        print(i)
    else:
        continue