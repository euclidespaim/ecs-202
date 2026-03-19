velocidade = int(input("Digite a velocidade do veículo: "))

multa = (velocidade - 80) * 7

if velocidade <= 80:
    print("Veículo dentro do limite de velocidade!")
else:
    print("Veículo acima do limite de velocidade.", multa )
