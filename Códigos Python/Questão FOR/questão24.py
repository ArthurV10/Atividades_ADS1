"""
 A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
escreva:
a) média de salário da população;
b) média de número de filhos;
c) percentual de pessoas com salário de até R$ 1.000,00.
"""

def main():
    qtdHabitantes = int(input("Insira a quantidade de habitantes: "))
    salarioTotal = 0
    filhosTotais = 0
    habitantesSalariosAteMil = 0
    for _ in range(qtdHabitantes):
        salario = float(input("Insira o salário do habitante: "))
        salarioTotal += salario
        filhosTotais += int(input("Insira a quantidade de filhos do habitante: "))
        if salario <= 1000:
            habitantesSalariosAteMil += 1
    
    mediaSalario, mediaFilhos, percentualAteMil = CalcularMediasEPercentual(salarioTotal, qtdHabitantes, filhosTotais, habitantesSalariosAteMil)

    print(f"""
    ===================================================================================
    a) Média de salário da população: R$ {mediaSalario:.2f}
    b) Média de número de filhos: {mediaFilhos:.0f}
    c) Percentual de pessoas com salário de até R$ 1.000,00: {percentualAteMil:.2f}%
    ===================================================================================
    """)

def CalcularMediasEPercentual(salarioTotal, qtdHabitantes, filhosTotais, habitantesSalariosAteMil):
    mediaSalario = salarioTotal / qtdHabitantes
    mediaFilhos = filhosTotais / qtdHabitantes
    percentualAteMil = (habitantesSalariosAteMil / qtdHabitantes) * 100

    return mediaSalario, mediaFilhos, percentualAteMil

if __name__ == "__main__":
    main()

