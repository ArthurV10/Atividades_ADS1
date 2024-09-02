def createMatrix():
    matrixRangeX = int(input("Digite o tamanho X da matriz: "))
    matrixRangeY = int(input("Digite o tamanho Y da matriz: "))

    for i in range(matrixRangeX * matrixRangeY):
        line = []
        for number in range(matrixRangeX):
            line.append(number)
             
