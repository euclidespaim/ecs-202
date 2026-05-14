# Crie uma função verificar_nota que receba 
# a média de um aluno. 
# Se a média for 7 ou mais, retorne "Aprovado". 
# Se for entre 5 e 6.9, retorne "Recuperação". 
# Caso contrário, retorne "Reprovado".

def verificar_nota(media):
    if media >= 7:
        print("Aprovado!")
    elif media < 7 and media >= 5:
        print("Recuperação!")
    elif media < 5:
        print("Reprovado!")

#verificar_nota(4)