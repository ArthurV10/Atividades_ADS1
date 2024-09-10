def showMenu(arrayText : list, title : str):
    print(title)
    count = 1
    for text in arrayText:
        if count < 10:
            print(f"|0{count} - {text}")
        elif count >= 10:
            print(f"|{count} - {text}")
        count += 1

def clearScreen():
    import os
    import platform

    # Verifica qual sistema operacional está sendo utilizado
    if platform.system() == "Windows":
        os.system("cls")  # Comando para Windows
    else:
        os.system("clear")  # Comando para Linux e macOS

TEXT_MENU = [
    "Calcular O Fatorial De Um Numero N",
    "Imprimir Uma Sequencia Fibonacci De Comprimento C",
    "Função Que Imprime Uma Sequencia Simples De A ate B",
    "Calcular O Produto (Multiplicacao) Nas Formas De Somas Sucessivas",
    "Calcular Exponencial De Um Numero N Elevado A Expoente E",
    "Dado um Intervalo A e B, Calcular O Somatorio De Um Vetor De N Elementos Aleatórios",
    "Contar Vogais E Consoantes de Frase"
]

def pressEnter():
    input("Press Enter To Continue")

def getPositiveNumber(text : str):
    _numberPositive = int(input(text))
    while _numberPositive <= 0:
        print("Numero Invalido!")
        _numberPositive = int(input("Digite O Numero Novamente: "))
    return _numberPositive

def getPositiveNumberWithZero(text : str):
    _numberPositive = int(input(text))
    while _numberPositive < 0:
        print("Numero Invalido!")
        _numberPositive = int(input("Digite O Numero Novamente: "))
    return _numberPositive


def fatorial(number : int = 0):
    result = number
    while number > 1:
        number -= 1
        result *= number
    return result

def fibonacci(height: int = 1):
    _lastNumber = 0
    _proxNumber = 1
    
    while height > 0:
        print(_lastNumber)
        _lastNumber = _proxNumber
        _proxNumber = _lastNumber + _proxNumber
        height -= 1

def showSequence(start : int = 0,  end : int = 1):
    while end < start:
        print("Valor Invalido Para Criar Sequencia!")
        start = getPositiveNumberWithZero("Digite O Começo: ")
        end = getPositiveNumberWithZero("Digite O Fim: ")
    count = end - start
    print(start)
    while count > 0:
        count -= 1
        start = start + 1
        print(start)

        
def choseMenu(optionMenu, continued):
    match optionMenu:
        case 1:
            clearScreen()
            _resultFatorial = fatorial(getPositiveNumber("Digite O Fatorial Desejado: "))
            print(f"Resultado: {_resultFatorial}")
        case 2:
            clearScreen()
            _showFibonacci = fibonacci(getPositiveNumber("Digite O Tamanho Da Sequencia: "))
        case 3:
            clearScreen()
            showSequence(getPositiveNumberWithZero("Digite Onde Começa: "), getPositiveNumberWithZero("Digite Onde Termina: "))
        case 4:
            clearScreen()
            print("Opção 4 ainda não implementada.")
        case 5:
            clearScreen()
            print("Opção 5 ainda não implementada.")
        case 6:
            clearScreen()
            print("Opção 6 ainda não implementada.")
        case 7:
            clearScreen()
            print("Opção 7 ainda não implementada.")
        case _ if optionMenu > 7:
            continued = False
    return continued

clearScreen()

def main():
    infinity = True
    while infinity:
        clearScreen()
        showMenu(TEXT_MENU, "|====|Menu|====|")
        infinity = choseMenu(getPositiveNumber(">>> "), infinity)  # Recebe a atualização do 'infinity'
        pressEnter()
    print("Encerrando Programa")

main()

