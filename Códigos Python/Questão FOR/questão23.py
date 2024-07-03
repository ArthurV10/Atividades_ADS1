"""
Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
horas trabalhadas e o seu no de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
líquido do funcionário.
"""

def main():
    qtdFuncionarios = int(input("Insira quantos funcionários serão analisados na ficha: "));
    for _ in range(qtdFuncionarios):
        codigoFuncionario = int(input("Insira o código do funcionário: "));
        horaDeTrabalho = int(input("Quantas horas o funcionário trabalha: "));
        qtdDependentes = int(input("Insira o número de dependentes do funcionário: "));
        valorBruto, valorINSS, valorIR, valorLiquido = calcular_salario(horaDeTrabalho, qtdDependentes, 12, 40);
        imprimir_ficha(codigoFuncionario, horaDeTrabalho, qtdDependentes, valorBruto, valorINSS, valorIR, valorLiquido);
    print("Encerrando Codigo...");


def calcular_salario(HorasTrabalhadas, QuantidadeDependentes, valorPorHora, valorPorDependente):
    dinheiroPorHora = valorPorHora * HorasTrabalhadas;
    dinheiroDependente = valorPorDependente * QuantidadeDependentes;
    valorBruto = dinheiroPorHora + dinheiroDependente;
    valorINSS = valorBruto * 0.085;
    valorIR = valorBruto * 0.05;
    valorLiquido = valorBruto - (valorINSS + valorIR);

    return valorBruto, valorINSS, valorIR, valorLiquido;


def imprimir_ficha(codigoFuncionario, HorasTrabalhadas, QuantidadeDependentes, valorBruto, valorINSS, valorIR, valorLiquido):
    print(f"""
    =========================================
    Código do Funcionário: {codigoFuncionario};
    Horas Trabalhadas: {HorasTrabalhadas};
    Quantidade de Dependentes: {QuantidadeDependentes};
    Valor Bruto: R$ {valorBruto:.2f};
    Desconto INSS: R$ {valorINSS:.2f};
    Desconto IR: R$ {valorIR:.2f};
    Valor Líquido: R$ {valorLiquido:.2f};
    =========================================
    """)

if __name__ == "__main__":
    main();
