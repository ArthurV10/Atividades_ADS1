def verificar_valor_positivo(X):
    while X < 0:
        import os
        os.system('cls')
        print("Valor Invalido!")
        X = int(input("Digite novamente: "))
    return X

print("Media e Soma de N numeros!")
qtd_numeros = verificar_valor_positivo(int(input("Digite quantos numeros deseja ler: ")))
somatorio = 0
for i in range(qtd_numeros):
    numero = verificar_valor_positivo(int(input("Digite o numero que deseja: ")))
    somatorio += numero

media = somatorio // qtd_numeros

print(f"""
*********************
Soma: {somatorio}
Media: {media}
*********************
""")