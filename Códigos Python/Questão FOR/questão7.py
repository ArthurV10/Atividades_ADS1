#Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.
def verificar_valor_positivo(X):
    while X < 0:
        import os
        os.system('cls')
        print("Valor Invalido!")
        X = int(input("Digite novamente: "))
    return X

print("Somatorio de todos os Numeros até N")
valor_n = verificar_valor_positivo(int(input("Digite um valor: ")))
resultado = 0
for i in range(valor_n + 1):
    resultado += i
print(resultado)
print("Encerrando Programa...")