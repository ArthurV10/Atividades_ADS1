def verificar_valor_positivo(X):
    while X < 0:
        import os
        os.system('cls')
        print("Valor Invalido!")
        X = int(input("Digite novamente: "))
    return X

def calcular_fatorial(numero):
    resultado = 1
    for i in range(1, numero + 1):
        resultado *= i
    return resultado

print("Calculadora de Fatorial!")
numero = verificar_valor_positivo(int(input("Digite o valor que deseja saber o fatorial: ")))
resultado_fatorial = calcular_fatorial(numero)
print(resultado_fatorial)

