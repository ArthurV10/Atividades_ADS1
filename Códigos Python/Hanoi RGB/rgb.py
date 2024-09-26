from utils import *
import random
import copy
from typing import Callable


# Definições de cores ANSI
WHITE_BACKGROUND = '\033[47m'
BOLD = '\033[1m'
ITALIC = '\033[3m'
RED = '\033[91m'
GREEN = '\033[92m'
BLUE = '\033[94m'
RESET = '\033[0m'


TEXT_TUTORIAL = [
    f"|=======================|{BOLD}TUTORIAL{RESET}|=======================|",
    "| 1 - O Simbolo '-' significa vazio                      |",
    "|========================================================|",
    "|     Quando quiser mover uma peça para outra torre,     |",
    "| 2 - digite simbolo da torre que deseja a peça mover,   |",
    "|     e o simbolo da torre que deve receber a peça       |",
    "|========================================================|",
    f"|     Exemplo: '{RED}R{RESET}{GREEN}G{RESET}' Move a peça da torre {RED}R{RESET} para {GREEN}G{RESET}        |",
    "|========================================================|"
]


TEXT_MENU = [
    "Single Player        |",
    "Multiplayer          |",
    "Dificuldade          |",
    "Sair                 |"
]


TEXTE_MENU_DIFFICULT = [
    f"|============| {BOLD}HANOI{RESET} {RED}DIFICULDADE{RESET} |=============|",
    f"| 1 - Basico (Unica Torre Preenchida)          |",
    f"| 2 - Intermediario (Preencher Aleatoriamente) |",
    f"| 3 - Avançado (Prenchida Semi-Compelta)       |",
    f"|==============================================|"
]


def showMenu(arrayText : list, title : str):
    print(title)
    count = 1
    for text in arrayText:
        if count < 10:
            rainbow_text(f"|0{count} - {text}")
        elif count >= 10:
            rainbow_text(f"|{count} - {text}")
        count += 1


def rainbow_text(text):
    for i in range(len(text)):
        color_code = 20 + (i % 216) 
        print(f"\033[38;5;{color_code}m{text[i]}", end="")
    print("\033[0m")  # Resetar a cor


def generateTowers(size: int = 1, qtd: int = 1, function: Callable[[], str] = lambda: "", difficult : int = 1):
    tower = []
    match difficult:
        case 1:
            basicDifficult(tower, size, qtd, function)
        case 2:
            intermediaryDifficult(tower, size, qtd, function)
        case 3:
            advancedDifficult(tower, size, qtd, function)
    return tower


def basicDifficult(tower, size, qtd, function: Callable[[], str] = lambda: ""):
    for i in range(size):
        tower.append([])  # Cria uma nova sublista para cada "andar"
        for j in range(qtd):
            if j == 0:
                tower[i].append(function())  # Chama a função para obter o valor
            elif j >= 1:
                tower[i].append("-")  # Adiciona um espaço vazio


def intermediaryDifficult(tower, size, qtd, function: Callable[[], str] = lambda: ""):
    for i in range(size):
        tower.append(["-"] * qtd)  # Inicializa todas as posições com "-"
        
    for i in range(qtd):
        randomQtdTower = random.randint(3, 7)  # Escolhe aleatoriamente quantas peças deve possuir cada torre
        for j in range(randomQtdTower):
            tower[size - j - 1][i] = function()  # Preenche de baixo para cima


def advancedDifficult(tower, size, qtd, function: Callable[[], str] = lambda: ""):
    for i in range(size):
        tower.append(["-"] * qtd)  # Inicializa todas as posições com "-"
        
    for i in range(qtd):
        for j in range(size - 1, 0, -1):
            tower[j][i] = function()  # Preenche de baixo para cima


def generateRandomRGB() -> str:
    number = random.randint(1, 3)
    match number:
        case 1:
            return "R"
        case 2:
            return "G"
        case 3:
            return "B"


def showTowerVertical(qtdtowers, sizeTower, towers):
    print(f"|=========||{BOLD}HANOI{RESET} {RED}R{RESET}{GREEN}G{RESET}{BLUE}B{RESET}||=========|")
    print(f"| Torre {RED}R{RESET} || Torre {GREEN}G{RESET} || Torre {BLUE}B{RESET} |")
    print("=================================")
    for i in range(sizeTower):  # Itera primeiro sobre os andares (linhas)
        for j in range(qtdtowers):  # Itera sobre as torres (colunas)
            # Adiciona cores dependendo do valor da torre
            cell = towers[i][j]
            if cell == "R":
                print(f"|    {RED}R{RESET}", end="    |")
            elif cell == "G":
                print(f"|    {GREEN}G{RESET}", end="    |")
            elif cell == "B":
                print(f"|    {BLUE}B{RESET}", end="    |")
            else:
                print(f"|    {cell}", end="    |")
        print()  # Pula para a próxima linha após cada andar
    print("=================================")


def showTutorial(arrayText):
    # Pega cada index do array criado, e printa valor por valor
    for index in range(len(arrayText)):
        print(arrayText[index])


def showDifficult(arrayText):
    for index in range(len(arrayText)):
        print(arrayText[index])
    

def HanoiRGBGameMoviment(tower, answer):
    tower_map = {'R': 0, 'G': 1, 'B': 2}
    count = 0

    if answer == "-1":
        return -1  # Retorna -1 para indicar que o jogador quer voltar ao menu

    if len(answer) != 2:
        print("Erro: A entrada deve conter exatamente dois caracteres (ex: 'RG').")
        pressEnter()
        return count

    try:
        from_tower = tower_map[answer[0]]
        to_tower = tower_map[answer[1]]
    except KeyError:
        print("Erro: Torre inválida. Use 'R', 'G', ou 'B'.")
        pressEnter()
        return count

    piece = "-"
    for i in range(len(tower)):  # De baixo para cima
        if tower[i][from_tower] != "-":
            piece = tower[i][from_tower]
            tower[i][from_tower] = "-"  # Remove a peça do local encontrado
            break

    if piece != "-":  # Se encontrou uma peça válida
        count += 1
        for i in range(len(tower) - 1, -1, -1):  # De cima para baixo
            if tower[i][to_tower] == "-":
                tower[i][to_tower] = piece  # Coloca a peça no novo local
                break
    return count



def verificationHanoiSuccessful(towers):
    # Funções para verificar cada torre individualmente
    def is_valid_tower(tower, valid_char):
        return all(cell == valid_char or cell == "-" for cell in tower)

    # Verifica as torres individualmente
    return (
        is_valid_tower([tower[0] for tower in towers], "R") and
        is_valid_tower([tower[1] for tower in towers], "G") and
        is_valid_tower([tower[2] for tower in towers], "B")
    )


def clearScreen():
    # Função para limpar o terminal
    import os
    os.system('cls' if os.name == 'nt' else 'clear')


def singlePlayer(settings : dict):
    difficulty = settings["difficulty"]
    count = 0
    towers = generateTowers(9, 3, generateRandomRGB, difficulty)  # Gera torres com valores aleatórios

    while not verificationHanoiSuccessful(towers):
        clearScreen()
        showTowerVertical(3, 9, towers)
        rainbow_text(f"O Total De Movimentos Foi: {count}")
        print('Se deseja retornar ao menu, digite "-1"')
        _answer = input("Digite Seu Movimento (Ex: RG, BG): ").upper()
        
        # Verifica se o jogador deseja voltar ao menu
        result = HanoiRGBGameMoviment(towers, _answer)
        if result == -1:
            return  # Sai do jogo e volta ao menu
        count += result

    clearScreen()
    showTowerVertical(3, 9, towers)
    if count < 12:
        rainbow_text(f"{count} Movimento/s, Você Foi Muito Bem, Parabens!")
    elif count >= 12 and count <= 16:
        rainbow_text(f"{count} Movimento/s, Parabens!")
    else:
        rainbow_text(f"{count} Movimento/s, Nhe... Poderia Ser Melhor!")
    pressEnter()


def multiplayer(settings : dict):
    difficulty = settings["difficulty"]
    player = 1
    towers = generateTowers(9, 3, generateRandomRGB, difficulty)
    player1_moves = 0
    player2_moves = 0

    while not verificationHanoiSuccessful(towers):
        clearScreen()
        showTowerVertical(3, 9, towers)
        rainbow_text(f"Jogador {player} é Sua Vez.")
        if player == 1:
            rainbow_text(f"Movimentos Jogador 1: {player1_moves}")
        else:
            rainbow_text(f"Movimentos Jogador 2: {player2_moves}")

        print('Se deseja retornar ao menu, digite "-1"')
        _answer = input("Digite Seu Movimento (Ex: RG, BG): ").upper()

        result = HanoiRGBGameMoviment(towers, _answer)
        if result == -1:
            return  # Sai do jogo e volta ao menu

        if player == 1:
            player1_moves += result
            player = 2
        else:
            player2_moves += result
            player = 1

    clearScreen()
    showTowerVertical(3, 9, towers)
    if player1_moves < player2_moves:
        rainbow_text(f"Jogador 1 Venceu com {player1_moves} Movimento/s!")
    elif player2_moves < player1_moves:
        rainbow_text(f"Jogador 2 Venceu com {player2_moves} Movimento/s!")
    else:
        rainbow_text(f"Empate com {player1_moves} Movimento/s!")
    pressEnter()


def tutorial():
    answerTutorial = "?"
    while answerTutorial != "S":
        clearScreen()
        showTutorial(TEXT_TUTORIAL)
        answerTutorial = input(">>> Foi possivel entender a brincadeirinha? (S/N): ").upper()
        if answerTutorial == "N":
            print()
            print(f"Para Obter Um Conhecimento Mais Amplo, Visite: {BLUE}https://clubes.obmep.org.br/blog/torre-de-hanoi/{RESET}")
            input("Pression ENTER para prosseguir!")


def askDifficult():
    showDifficult(TEXTE_MENU_DIFFICULT)
    try:
        difficulty = int(input(">>> "))
        if difficulty >= 1 and difficulty <= 3:
            return difficulty
        else:
            print("Por favor, escolha uma dificuldade válida (1, 2 ou 3).")
            return askDifficult()  # Rechama a função se a entrada for inválida
    except ValueError:
        print("Entrada inválida. Por favor, digite um número.")
        return askDifficult()




def menu(option, settings):
    clearScreen()
    showMenu(TEXT_MENU, f"|======| {BOLD}HANOI{RESET} {RED}MENU{RESET} |======|")
    print("============================")
    option = int(input(">>> "))
    match option:
        case 1:
            singlePlayer(settings)
        case 2:
            multiplayer(settings)
        case 3:
            settings["difficulty"] = askDifficult()
        case 4:
            return option


def main():
    option = 0
    settings = {
        "difficulty" : 1
    }
    tutorial()
    while option != 4:
        option = menu(option, settings)
    print("Encerrando Program...")


main()
