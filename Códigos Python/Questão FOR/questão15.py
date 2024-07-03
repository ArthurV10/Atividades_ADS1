"""
Leia N, calcule e escreva os N primeiros termos de seqüência (1, 3, 6, 10, 15,...).
1 + 2 = 3/ 3 + 3 = 6/ 6 + 4 = 10
"""
def main():
    NumeroN = int(input("Insira o quantos termos da sequencia deseja revelar: "))
    SomaAcumulada = 0
    for numero in range(1, NumeroN + 1):
        SomaAcumulada += numero
        print(SomaAcumulada)


if __name__ == "__main__":
    main()