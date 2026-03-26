#Este desafio exige que o aluno combine cálculos matemáticos 
#com múltiplos testes lógicos.

#"Um banco concede empréstimos apenas se o cliente atender 
# a três requisitos:

# Ter entre 21 e 65 anos.
# Ter uma renda mensal de pelo menos R$ 2.500,00.
# O valor da parcela não pode ultrapassar 30% da renda."


# entrada de dados
renda = float(input("Digite sua renda: "))
idade = int(input("Digite sus idade: "))
valor_emprestimo = float(input("Digite o valor a ser contratado: "))
numero_parcelas = int(input("Em quantos meses você quer pagar: "))

# processamento lógico
idade_minima = idade >= 21 and idade <= 65
renda_minima = renda >= 2500
parcela_maxima = valor_emprestimo <= (renda * 0.30)

if idade_minima and renda_minima and parcela_maxima:
    print("Empréstimo aprovado!")
else:
    print("Emprestimo negado!!")











