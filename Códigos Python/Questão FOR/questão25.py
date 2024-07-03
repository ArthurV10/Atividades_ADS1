"""
Em uma eleição presidencial existem 3 (três) candidatos. Os votos são informados através de códigos.
Os dados utilizados para a contagem dos votos obedecem à seguinte codificação:
· 1, 2, 3 = voto para os respectivos candidatos;
· 9 = voto nulo;
· 0 = voto em branco;
Escreva um algoritmo que leia o código votado por N eleitores. Ao final, calcule e escreva:
a) total de votos para cada candidato;
b) total de votos nulos;
c) total de votos em branco;
d) quem venceu a eleição.
"""

print("""
===========================
Escolha as Opções de Voto
---------------------------
1 - Candidato 1
2 - Candidato 2
3 - Candidato 3
9 - Voto Nulo
0 - Voto em Branco
---------------------------
Os Votos fora dessas opções
não serão computados
===========================
""")

def main():
    qtdEleitores = int(input("Insira a quantidade de Eleitores: "))
    candidato1 = 0
    candidato2 = 0
    candidato3 = 0
    votoNulo = 0
    votoEmBranco = 0
    for eleitor in range(qtdEleitores):
        voto = int(input("Informe o voto do eleitor: "))
        if (voto == 1):
            candidato1 += 1
        elif (voto == 2):
            candidato2 += 1
        elif (voto == 3):
            candidato3 += 1
        elif (voto == 9):
            votoNulo += 1
        elif (voto == 0):
            votoEmBranco += 1
    print(f"""
    ==================================
    Candidato 1 = {candidato1}
    Candidato 2 = {candidato2}
    Candidato 3 = {candidato3}
    Voto Nulo = {votoNulo}
    Voto Em Branco = {votoEmBranco}
    ==================================
        """)

if __name__ == "__main__":
    main()