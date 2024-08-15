from utilities import *
def showMenu():
    print("""
    ==========|Menu|===========
    01 - Carregar Arquivo
    02 - Palavras com 20 letras
    03 - Palavras sem "E"
    04 - Letras Proibidas
    05 - Letras Permitadas
    06 - Letras Obrigatorias
    07 - Ordem Alfabetica
    08 - Encerrar
    ===========================""")


def print20Char(archive):
    count = 0
    for line in archive:
        if customLen(line) >= 20:
            count += 1
            print(f"""
            Palavra {count}:
            ==> {line}
            Tamanho da Palavra: {customLen(line)}
            """)

def hasNoEQuestion(archive):
    count = 0
    countTotal = 0
    for line in archive:
        countTotal += 1
        if not hasE(line):  # Se não contém "E" ou "e"
            count += 1
            print(f"""
            Palavra {count}:
            ==> {line}
            """)
    print(f"Palavras sem 'E': {calculatePercentage(count, countTotal):.2f}%")

def prohibitedLetter(archive, phrase):
    count = 0
    countTotal = 0
    prohibitedList = customSplit(phrase)
    for word in archive:
        countTotal+= 1
        if not wordsContain(word, prohibitedList):
            count +=1
            print(f"""
            Palavra {count}
            ==> {word}
            """) 
    print("Quantidade de Palavras Proibidas: ", countTotal - count)

def permittedLetters(archive, phrase):
    count = 0
    permittedList = customSplit(phrase)
    for words in archive:
        if wordsContain(words, permittedList):
            count += 1
            print(f"""
            Palavra {count}
            ==> { words}
            """)

def mandatoryLetters(archive, phrase):
    count = 0
    for words in archive:
        if allLettersContain(words, phrase):
            count += 1
            print(f"""
            Palavra {count}
            ==> {words}
            """)

def printSequenceAbcdarian(archive):
    count = 0
    total_palavras = 0
    for line in archive:
        total_palavras += 1
        line = line.strip()  # Removendo espaços e quebras de linha
        if abcderian(line):  # Verifica se a palavra está em ordem alfabética
            count += 1
            print(f"""
            Palavra {count} em ordem alfabética:
            ==> {line}
            """)  

def main():
    option = 0
    file = ""
    while option != 8:
        file = open("words.txt")
        clearScreen()
        showMenu()
        option = verificationNumber(int(input(">>> ")), 0, 8)

        if option == 1:
            file = loadArchive("words.txt")
            print("Arquivo Carregado!")
            pressEnter()

        if option == 2:
            if file == "":
                clearScreen()
                print("Arquivo Ainda Não Carregado!")
                pressEnter()
            elif file != "":
                print20Char(file)
                pressEnter()

        elif option == 3:
            if file == "":
                clearScreen()
                print("Arquivo Ainda Não Carregado!")
                pressEnter()
            elif file != "":
                hasNoEQuestion(file)
                pressEnter()

        elif option == 4:
            if file == "":
                clearScreen()
                print("Arquivo Ainda Não Carregado!")
                pressEnter()
            elif file != "":
                prohibitedLetter(file, input("Digite as letras proibidas: "))
                pressEnter()

        elif option == 5:
            if file == "":
                clearScreen()
                print("Arquivo Ainda Não Carregado!")
                pressEnter()
            elif file != "":
                permittedLetters(file, input("Digite as letras permitidas: "))
                pressEnter()
        
        elif option == 6:
            if file == "":
                clearScreen()
                print("Arquivo Ainda Não Carregado!")
                pressEnter()
            elif file != "":
                mandatoryLetters(file, input("Digite as letras obrigatorias: "))
                pressEnter()
        
        elif option == 7:
            if file == "":
                clearScreen()
                print("Arquivo Ainda Não Carregado!")
                pressEnter()
            elif file != "":
                printSequenceAbcdarian(file)
                pressEnter()
    print("Encerrando Programa...")
    
main()