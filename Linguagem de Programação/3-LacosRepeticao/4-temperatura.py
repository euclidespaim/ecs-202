# A Defesa Civil de Itajaí registrou as temperaturas 
# médias de 7 dias: [22, 15, 14, 25, 17, 28, 13]. 
# Crie um programa que percorra essa lista e, 
# ao final, informe ao usuário quantos desses dias 
# tiveram temperaturas abaixo de 18°C e a 
# temperatura média da semana.


temperaturas = [22, 15, 14, 25, 17, 28, 13]
contador = 0
media = 0
dias = 0

for n in temperaturas:
    media = media + n
    dias = dias + 1

    if n <= 18:
        print("Temperatura do dia:", n,"ºC") 
        contador += 1
        
print("A temperatura ficou abaixo de 18º durante", contador, "dias")
print("A temperatura média da semana foi", media / dias)