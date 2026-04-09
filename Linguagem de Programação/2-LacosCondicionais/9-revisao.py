# Exercício: Classificador de Escalões de Idade 

# Um sistema de inscrições para um evento desportivo precisa 
# de categorizar os participantes automaticamente com base 
# na idade introduzida. Regras de Classificação:

# Idade inferior a 12 anos: "Escalão Infantil"
# Idade entre 12 e 17 anos: "Escalão Juvenil"
# Idade igual ou superior a 18 anos: "Escalão Adulto"

idade = int(input("Introduza a idade do participante: "))

if idade < 12:
    print("Escalão Infantil")
elif 12 <= idade < 18:
    print("Escalão Juvenil")
else:
    print("Escalão Adulto")
