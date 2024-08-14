def showMenu():
    print("""
    ==========|Menu|===========
    01  - Ainda não tem nada
    02  - Palavras com 20 letras
    03  - 
    10 - Encerrar
    ===========================""")

def clearScreen():
    import os
    os.system("cls")

def countChar(word):
    count = 0
    for char in word:
        count += 1
    return count


def print20Char(archive):
    for line in archive:
        if countChar(line) == 20:
            print(line)

def pressEnter():
    press = (input("Press Enter To Continue"))
    return

def main():
    ##TODO Ajeitar, remover espaços em branco
    ## Arquivo nescessário para a questão
    file = open("words.txt")
    ## Variável para escolha
    opção = 0
    ## limpar tela, apresentar menu e permite escolha de item no menu
    while opção != 10:
        clearScreen()
        showMenu()
        opção = int(input(">>> "))
        ## Dependendo da escolha, alguma ação ocorrerá! 
        if opção == 2:
            print20Char(file)
            pressEnter()
main()





