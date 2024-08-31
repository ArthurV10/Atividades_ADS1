def main():
    print(">>>MATRIZ<<<")
    # linhas = int(input("Digite a quantidade de linhas da matriz: "))
    # colunas = int(input("Digite a quantidade de colunas da matriz: "))
    linha = 3
    coluna = 3

    for i in linha:
        for j in coluna:
            pass
        


def criarMatriz(linhas, colunas):
    matriz = []
    for i in linhas:
        matriz.append(criarVetor(colunas))
    return matriz

def criarVetor(tamanho, valor = 0):
    vetor = []

main()
    