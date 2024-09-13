import random
from typing import Callable

def generateTowers(size: int = 1, qtd: int = 1, function: Callable[[], str] = lambda: ""):
    tower = []
    for i in range(size):
        tower.append([])  # Cria uma nova sublista para cada "andar"
        for j in range(qtd):
            tower[i].append(function())  # Chama a função para obter o valor
    return tower

def generateRandomRGB() -> str:
    number = random.randint(1, 3)
    match number:
        case 1:
            return "R"
        case 2: 
            return "G"
        case 3: 
            return "B"

# Função para colorir o texto
def color_text(text: str, color: str) -> str:
    colors = {
        "R": "\033[31m",  # Red
        "G": "\033[32m",  # Green
        "B": "\033[34m",  # Blue
        "RESET": "\033[0m"  # Reset to default color
    }
    return f"{colors.get(color, colors['RESET'])}{text}{colors['RESET']}"

def main():
    # Passa a função `generateRandomRGB` para `generateTowers`
    print("Cor gerada:", generateRandomRGB())
    towers = generateTowers(9, 1, generateRandomRGB)  # Gera torres com valores aleatórios
    
    # Exibe as torres com cores
    for i, tower in enumerate(towers):
        print(f"Linha {i + 1} da Torre 1: " + " ".join(color_text(item, item) for item in tower))

main()
