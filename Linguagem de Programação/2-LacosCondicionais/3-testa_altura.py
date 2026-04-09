



#"Um parque de diversões exige que uma criança tenha 
# pelo menos 1.40m de altura para andar na montanha-russa.
# E que ela seja maior de 15 anos. 
# Vamos criar um sensor digital para o operador do 
# brinquedo?"

idade = int(input("Digite sua idade: "))
altura = float(input("Digite sua altura: "))

if idade >= 15 and altura >= 1.40:
    print("Você pode andar na montanha russa!")
else:
    print("Você não pode andar de montanha russa!")