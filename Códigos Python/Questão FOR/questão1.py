def verificar_valor_positivo(X):
    while X < 0:
        import os
        os.system('cls')
        print("Valor Invalido!")
        X = int(input("Digite novamente: "))
    return X

print("Escreve Valores Até o numero desejado: ")
valor_n = verificar_valor_positivo(int(input("Digite até que numero deseja que seja escrito: ")))
for i in range(valor_n + 1):
        print(i)
print("Encerrando Programa...")

