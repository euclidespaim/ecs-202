# Exercício 1: Solicite ao usuário o número de 
# um mês (1 a 12).
# Use match para imprimir o nome do mês.
# Use (_) como valor padrão caso o número não 
# seja válido.

mes = int(input("Digite um número de 1 a 12 correspondente ao mês do ano: "))

match mes:
    case 1:
        print("Janeiro")
    case 2:
        print("Fevereiro")
    case 3:
        print("Março")
    case _:
        print("Você digitou um número incorreto!") 
