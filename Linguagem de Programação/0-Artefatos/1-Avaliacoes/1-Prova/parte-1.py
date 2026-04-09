# pyright: reportGeneralTypeIssues=false

# linha 8: falta converter a velocidade para um número
# linha 12: falta os dois pontos no final da linha
# linha 13: falta identação correta


velocidade = float(input("Digite a velocidade do veículo: "))

limite = 80

if velocidade  > limite:
    print("Veículo acima do limite de velocidade.")
else:                                                  
    print("Veículo dentro do limite de velocidade!")