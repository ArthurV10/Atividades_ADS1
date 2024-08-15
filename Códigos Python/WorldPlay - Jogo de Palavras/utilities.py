def pressEnter():
    input("Press Enter To Continue")

def loadArchive(archive):
    file = open(archive)
    arrayArchive = []
    for phrase in file:
        print("Arquivo sendo carregado: ", phrase)
        arrayArchive = arrayArchive + [phrase]
    return arrayArchive

def verificationNumber(number, MinNumber, MaxNumber):
    num = number
    while num > MaxNumber or num < MinNumber:
        print("Digitação Inválida!")
        num = int(input("Digite novamente: "))
    return num

def abcderian(line):
    valorAsciiAnterior = ord(line[0])
    for letter in line[1:]:  # Começa a partir da segunda letra
        if ord(letter) < valorAsciiAnterior:  # Se a letra atual for menor, a ordem está errada
            return False
        valorAsciiAnterior = ord(letter)  # Atualiza o valor anterior para a letra atual
    return True

def customSplit(phrase):
    prohibitedList = []
    for letter in phrase:
        prohibitedList = prohibitedList + [letter]
    return prohibitedList

def customLen(phrase):
    count = -1
    for letter in phrase:
        count += 1
    return count

def allLettersContain(phrase, VectorLetters):
    for letter in VectorLetters:
        if letter not in phrase:
            return False
    return True

def wordsContain(word, vectorLetters):
    for letter in word:
        if letter in vectorLetters:
            return True
    return False

def hasE(char):
    return "E" in char or "e" in char

def clearScreen():
    import os
    import platform

    # Verifica qual sistema operacional está sendo utilizado
    if platform.system() == "Windows":
        os.system("cls")  # Comando para Windows
    else:
        os.system("clear")  # Comando para Linux e macOS

def calculatePercentage(partialValue, totalValue):
    if totalValue == 0:
        return 0
    percent = (partialValue / totalValue) * 100
    return percent