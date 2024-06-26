def remove_vogais(frase):
    vogais = "aeiouAEIOU"
    sem_vogais = ""
    for letra in frase:
        if letra not in vogais:
            sem_vogais += letra
    return sem_vogais

frase = input("Digite uma frase: ")
resultado = remove_vogais(frase)
print("Frase sem vogais:", resultado)


