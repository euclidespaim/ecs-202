# Crie um programa que peça para o usuário digitar 
# 3 notas de um aluno. Em seguida o programa deve
# calcular a média e mostrar na tela o resultado e 
# se o aluno foi Aprovado ou Reprovado.

nota_1 = int(input("Digite a nota 1: "))
nota_2 = int(input("Digite a nota 2: "))
nota_3 = int(input("Digite a nota 3: "))

media = (nota_1 + nota_2 + nota_3) / 3

if media >= 7:
    print("Aluno aprovado!", media)
else:
    print("Aluno reprovado!", media)


