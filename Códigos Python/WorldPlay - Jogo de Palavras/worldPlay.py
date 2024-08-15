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
        line = line.strip()
        if abcderian(line):  
            count += 1
            print(f"""
            Palavra {count} em ordem alfabética:
            ==> {line}
            """)  

def main():
    option = 0
    file = ""
    while option != 8:
        clearScreen()
        showMenu()
        option = verificationNumber(int(input(">>> ")), 0, 8)

        if option == 1:
            file = open("words.txt", "r")
            print("Arquivo Carregado!")
            pressEnter()

        if option == 2:
            if file == "":
                clearScreen()
                print("Arquivo Ainda Não Carregado!")
                pressEnter()
            elif file != "":
                file.seek(0)
                print20Char(file)
                pressEnter()

        elif option == 3:
            if file == "":
                clearScreen()
                print("Arquivo Ainda Não Carregado!")
                pressEnter()
            elif file != "":
                file.seek(0)
                hasNoEQuestion(file)
                pressEnter()

        elif option == 4:
            if file == "":
                clearScreen()
                print("Arquivo Ainda Não Carregado!")
                pressEnter()
            elif file != "":
                file.seek(0)
                prohibitedLetter(file, input("Digite as letras proibidas: "))
                pressEnter()

        elif option == 5:
            if file == "":
                clearScreen()
                print("Arquivo Ainda Não Carregado!")
                pressEnter()
            elif file != "":
                file.seek(0)
                permittedLetters(file, input("Digite as letras permitidas: "))
                pressEnter()
        
        elif option == 6:
            if file == "":
                clearScreen()
                print("Arquivo Ainda Não Carregado!")
                pressEnter()
            elif file != "":
                file.seek(0)
                mandatoryLetters(file, input("Digite as letras obrigatorias: "))
                pressEnter()
        
        elif option == 7:
            if file == "":
                clearScreen()
                print("Arquivo Ainda Não Carregado!")
                pressEnter()
            elif file != "":
                file.seek(0)
                printSequenceAbcdarian(file)
                pressEnter()
    print("Encerrando Programa...")
    
main()