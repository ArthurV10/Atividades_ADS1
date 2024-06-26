def verificar_valor_positivo(X):
    while X < 0:
        import os
        os.system('cls')
        print("Valor Invalido!")
        X = int(input("Digite novamente: "))
    return X

print("Escreve valores pares até o numero desejado!")
valor_n = int(input("Digite um valor: "))
for i in range(valor_n + 1):
    if i % 2 == 0:
        print(i)
    else: 
        continue